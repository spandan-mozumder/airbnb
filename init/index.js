const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "your mongo url";

main()
  .then(() => {
    console.log(`DB CONNECTED!`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner:"admin",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initilazing");
};

initDB();
