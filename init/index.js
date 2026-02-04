const mongoose = require("mongoose");
const initData = require("./data.js");
const reviewsData = require("./reviewsData.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const DEFAULT_OWNER_ID = "695ef94a7babad3bdb941d57";

main()
  .then(() => {
    console.log("Connection with DB is successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/restBNB");
}

// const initDB = async () => {
//   await Listing.deleteMany({});

//   const seededListings = initData.data.map((listing, index) => ({
//     ...listing,
//     owner: DEFAULT_OWNER_ID,
//     image: {
//       ...listing.image,
//       filename: `listingimg${index + 1}`,
//     },
//   }));

//   await Listing.insertMany(seededListings);

//   console.log("Database seeded successfully");
// };

// initDB();


const seedReviews = async () => {
  // remove all existing reviews
  await Review.deleteMany({});

  for (const reviewGroup of reviewsData.reviewsData) {
    // find listing by title
    const listing = await Listing.findOne({ title: reviewGroup.title });

    if (!listing) {
      console.log(`Listing not found: ${reviewGroup.title}`);
      continue;
    }

    // reset listing reviews to avoid duplicates
    listing.reviews = [];

    for (const reviewData of reviewGroup.reviews) {
      const review = new Review({
        comment: reviewData.comment,
        rating: reviewData.rating,
        author: reviewData.author, // ObjectId → User
      });

      await review.save();
      listing.reviews.push(review._id);
    }

    await listing.save();
  }

  console.log("Reviews seeded successfully");
};

seedReviews();