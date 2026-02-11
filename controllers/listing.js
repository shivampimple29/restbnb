const Listing = require("../models/listing.js");
const {
  calculateHostScore,
  calculateWFHScore,
  calculateAreaScore,
} = require("../utils/score.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const { q, filter } = req.query;

  let query = {};

  /* ---------------- SEARCH ---------------- */

  if (q && q.trim() !== "") {
    const regex = new RegExp(q, "i");

    query.$or = [
      { title: regex },
      { location: regex },
      { country: regex },
      { description: regex },
      { foodPreference: regex },
    ];

    // Search numeric price
    if (!isNaN(q)) {
      query.$or.push({ price: Number(q) });
    }

    // Badge keyword search
    const lower = q.toLowerCase();

    if (lower.includes("water")) {
      query.$or.push({ "badges.water24x7": true });
    }

    if (lower.includes("power")) {
      query.$or.push({ "badges.powerBackup": true });
    }

    if (lower.includes("wifi")) {
      query.$or.push({ "badges.wifiVerified": true });
    }
  }

  /* ---------------- FILTERS ---------------- */

  if (filter) {
    if (filter === "rooms") {
      query["badges.water24x7"] = true;
    }

    if (filter === "cities") {
      query.country = { $exists: true };
    }

    if (filter === "mountains") {
      query.title = /cabin|mountain|chalet/i;
    }

    if (filter === "pools") {
      query.description = /pool/i;
    }

    if (filter === "camping") {
      query.title = /camp|treehouse/i;
    }

    if (filter === "arctic") {
      query.title = /arctic|snow/i;
    }
  }

  const allListings = await Listing.find(query);

  allListings.forEach((listing) => {
    listing.hostScore = calculateHostScore(listing.hostStats);
    listing.wfhScore = calculateWFHScore(listing.workFromHome);
    listing.areaScore = calculateAreaScore(listing.areaMetrics);
  });

  res.render("Listings/index.ejs", {
    allListings,
    q,
    filter
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("Listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  res.render("Listings/show.ejs", {
    listing,
    hostScore: calculateHostScore(listing.hostStats),
    wfhScore: calculateWFHScore(listing.workFromHome),
    areaScore: calculateAreaScore(listing.areaMetrics),
  });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.body.features[0].geometry;
  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New listing added!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_225,w_250");
  res.render("Listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let delList = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
