const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const HooverInput = new Schema({
  roomSize: [Number],
  coords: [Number],
  patches: [[Number]],
  instructions: String
});

const HooverOutput = new Schema({
  coords: [Number],
  patches: Number
});

const Hoover = mongoose.model(
  "Hoover",
  new Schema({
    input: HooverInput,
    output: HooverOutput
  })
);

module.exports = {
  Hoover
};
