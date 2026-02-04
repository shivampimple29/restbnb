require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

mongoose.connect(process.env.DB_URL);

const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAP_TOKEN,
});

async function backfill() {
  const listings = await Listing.find({
    geometry: { $exists: false },
  });

  console.log(`Found ${listings.length} listings to update`);

  for (let listing of listings) {
    const query = `${listing.location}, ${listing.country}`;

    try {
      const response = await geocodingClient
        .forwardGeocode({
          query,
          limit: 1,
        })
        .send();

      if (response.body.features.length > 0) {
        listing.geometry = response.body.features[0].geometry;
        await listing.save();
        console.log("Updated:", listing.title);
      } else {
        console.log("No result for:", listing.title);
      }
    } catch (err) {
      console.error("Error updating:", listing.title, err.message);
    }
  }

  mongoose.connection.close();
}

backfill();
