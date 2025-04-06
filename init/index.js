const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "YOUR MONGODB URL HERE";

main()
  .then(() => {
    console.log("Connnected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "YOUR USER ID" //"67e82aa6534496900b5ffc95",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
