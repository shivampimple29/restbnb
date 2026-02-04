const mongoose = require("mongoose");

const reviewsData = [
  {
    title: "Cozy Beachfront Cottage",
    reviews: [
      {
        comment:
          "Absolutely loved the beachfront location. Waking up to ocean sounds was magical.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Very cozy and clean. Perfect for a calm and relaxing stay.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Nice place overall, but the furniture felt a bit outdated.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment:
          "Great location, but there were ants in the kitchen which was disappointing.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },

  {
    title: "Modern Loft in Downtown",
    reviews: [
      {
        comment:
          "Stylish loft and perfect downtown location. Loved staying here.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Clean, modern, and close to everything important.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment:
          "The apartment was nice, but street noise was noticeable at night.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Good location, but the elevator was frequently not working.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },

  {
    title: "Mountain Retreat",
    reviews: [
      {
        comment: "Beautiful surroundings and extremely peaceful environment.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Very relaxing stay with amazing views.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Nice retreat, but heating took a long time to work.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "The location was remote and difficult to reach at night.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },

  {
    title: "Historic Villa in Tuscany",
    reviews: [
      {
        comment: "Stunning villa with incredible views and rich history.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Very charming and well maintained property.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Lovely place, but Wi-Fi was very slow.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Beautiful villa, but the bathrooms could have been cleaner.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },

  {
    title: "Secluded Treehouse Getaway",
    reviews: [
      {
        comment: "Such a unique and peaceful experience surrounded by nature.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Very thoughtfully designed and comfortable.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Enjoyed the stay, but climbing up was tiring after dark.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Nice concept, but insects were a constant issue.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },

  {
    title: "Beachfront Paradise",
    reviews: [
      {
        comment: "Perfect beach vacation spot. Views were amazing.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Comfortable stay with direct beach access.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "The place was good, but beach chairs were broken.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Beautiful location, but cleaning could be improved.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },

  {
    title: "Rustic Cabin by the Lake",
    reviews: [
      {
        comment: "Peaceful lake views and very cozy cabin.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Great place to relax and unwind.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Nice stay, but kitchen equipment was limited.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Cabin was cold at night and heating was weak.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },

  {
    title: "Luxury Penthouse with City Views",
    reviews: [
      {
        comment: "Incredible city views and luxurious interiors.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Very spacious and modern apartment.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Great place, but check-in process was slow.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Nice penthouse, but parking was inconvenient.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    reviews: [
      {
        comment: "Fantastic location with direct slope access.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Warm and comfortable after skiing all day.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Good stay, but ski storage area was small.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Heating was inconsistent during very cold nights.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },

  {
    title: "Safari Lodge in the Serengeti",
    reviews: [
      {
        comment: "Unforgettable wildlife experience and amazing staff.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Comfortable lodge with stunning views.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Great experience, but food options were limited.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Mosquitoes were a big issue in the evenings.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },

  {
    title: "Historic Canal House",
    reviews: [
      {
        comment: "Beautiful historic house with a great view of the canal.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Charming interiors and very peaceful surroundings.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Lovely place, but stairs were steep and tiring.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Heating was not sufficient during cold nights.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Private Island Retreat",
    reviews: [
      {
        comment: "Truly once-in-a-lifetime experience. Absolute privacy.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Beautiful surroundings and very peaceful.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Amazing place, but transport arrangements were slow.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Food options were limited considering the price.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Charming Cottage in the Cotswolds",
    reviews: [
      {
        comment: "Absolutely charming and cozy countryside stay.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Peaceful surroundings and very relaxing.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Nice cottage, but bathrooms were quite small.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Heating system was unreliable during the night.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Historic Brownstone in Boston",
    reviews: [
      {
        comment: "Elegant home with lots of character and charm.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Great location close to major attractions.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Comfortable stay, but parking was difficult.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Older building, some areas needed maintenance.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Beachfront Bungalow in Bali",
    reviews: [
      {
        comment: "Loved waking up near the beach every morning.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Very peaceful and relaxing tropical vibe.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Nice place, but Wi-Fi was inconsistent.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Bathrooms could have been cleaner.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Mountain View Cabin in Banff",
    reviews: [
      {
        comment: "Breathtaking mountain views and calm atmosphere.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Comfortable cabin with all basic amenities.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Nice stay, but road access was tricky.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Heating was slow to warm up the cabin.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Art Deco Apartment in Miami",
    reviews: [
      {
        comment: "Loved the art deco vibe and decor.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Great location near beach and nightlife.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Nice apartment, but walls were thin.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Noise from nearby clubs was disturbing.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Tropical Villa in Phuket",
    reviews: [
      {
        comment: "Beautiful villa with a private pool.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Spacious, clean, and very relaxing.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Enjoyed the stay, but power cuts happened.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Location was far from main attractions.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Historic Castle in Scotland",
    reviews: [
      {
        comment: "An unforgettable stay with stunning architecture.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Unique experience and beautiful surroundings.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Amazing place, but rooms were very cold.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Heating and lighting could be improved.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Desert Oasis in Dubai",
    reviews: [
      {
        comment: "Luxury stay with breathtaking desert views.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Very spacious and premium experience.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Great place, but staff response was slow.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Price felt high compared to services offered.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Rustic Log Cabin in Montana",
    reviews: [
      {
        comment: "Peaceful cabin surrounded by nature. Very relaxing.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Cozy interiors and beautiful surroundings.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Nice stay, but road access was rough.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Heating was insufficient during very cold nights.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Beachfront Villa in Greece",
    reviews: [
      {
        comment: "Crystal clear water and stunning views.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Very comfortable villa in a great location.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Lovely place, but nearby restaurants were limited.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Cleaning service could have been better.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    reviews: [
      {
        comment: "Loved the eco-friendly concept and peaceful stay.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Very calm and close to nature.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Interesting stay, but limited electricity.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Insects were a constant issue at night.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Historic Cottage in Charleston",
    reviews: [
      {
        comment: "Charming home with lots of character.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Great location and comfortable stay.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Nice place, but street noise was noticeable.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Bathrooms were small and outdated.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Modern Apartment in Tokyo",
    reviews: [
      {
        comment: "Clean, modern, and very well connected.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Compact but extremely efficient layout.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Good stay, but space felt cramped.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Noise from nearby trains was disturbing.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    reviews: [
      {
        comment: "Beautiful lake views and peaceful surroundings.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Perfect for a relaxing weekend.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Nice stay, but limited nearby stores.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Cabin felt damp during rainy days.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
  {
    title: "Luxury Villa in the Maldives",
    reviews: [
      {
        comment: "Absolutely stunning overwater villa experience.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Luxury at its finest with total privacy.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
      {
        comment: "Amazing stay, but food prices were very high.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Service response was slow at times.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
    ],
  },
  {
    title: "Ski Chalet in Aspen",
    reviews: [
      {
        comment: "Perfect ski location with great amenities.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Very comfortable after long ski days.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
      {
        comment: "Nice chalet, but ski storage was limited.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff6f7babad3bdb941db7"),
      },
      {
        comment: "Heating system struggled during storms.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff897babad3bdb941dbe"),
      },
    ],
  },
  {
    title: "Secluded Beach House in Costa Rica",
    reviews: [
      {
        comment: "Very peaceful and private beach location.",
        rating: 5,
        author: new mongoose.Types.ObjectId("695effa77babad3bdb941dc5"),
      },
      {
        comment: "Great spot for relaxing and surfing.",
        rating: 4,
        author: new mongoose.Types.ObjectId("695effde7babad3bdb941dcc"),
      },
      {
        comment: "Nice house, but bugs were common.",
        rating: 3,
        author: new mongoose.Types.ObjectId("695eff077babad3bdb941da9"),
      },
      {
        comment: "Limited amenities and slow Wi-Fi.",
        rating: 2,
        author: new mongoose.Types.ObjectId("695eff3b7babad3bdb941db0"),
      },
    ],
  },
];

module.exports = { reviewsData };
