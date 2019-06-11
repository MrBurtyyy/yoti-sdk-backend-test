const mongoose = require("mongoose");

const initDatabase = () => {
  return mongoose.connect(
    process.env.MONGO_URL || "mongodb://localhost:27017/hoover",
    {
      useNewUrlParser: true
    },
    err => {
      if (err) {
        console.log("MongoDB connection error: " + err);
        process.exit(1);
      }
    }
  );
};

module.exports = {
  initDatabase
};
