const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,

  image: {
    url: String,
    filename: String,
  },

  price: Number,
  location: String,
  country: String,

  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },

  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },

  badges: {
    water24x7: { type: Boolean, default: false },
    powerBackup: { type: Boolean, default: false },
    wifiVerified: { type: Boolean, default: false },
  },

  workFromHome: {
    wifiSpeedMbps: Number,
    hasDesk: { type: Boolean, default: false },
    hasPowerBackup: { type: Boolean, default: false },
  },

  areaMetrics: {
    crimeIndex: Number,
    nightNoiseLevel: Number,
    avgSafetyRating: Number,
  },

  foodPreference: {
    type: String,
    enum: ["veg", "non-veg", "both"],
    default: "both",
  },

  houseRules: {
    quietHours: String,
    maxGuests: Number,
    visitorsAllowed: { type: Boolean, default: false },
  },

  hostStats: {
    avgRating: Number,
    responseTimeMinutes: Number,
    completedBookings: Number,
    cancelledBookings: Number,
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);