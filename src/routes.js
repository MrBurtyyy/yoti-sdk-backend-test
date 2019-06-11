const _ = require("lodash");
const hooverController = require("./hooverController");
const databaseController = require("./db/databaseController");
const { Hoover } = require("./db/models");

const handleHooverInstructions = async function(contextObj) {
  const response = hooverController.runHoover(contextObj);

  const input = {
    roomSize: _.get(contextObj, "roomSize"),
    coords: _.get(contextObj, "coords"),
    patches: _.get(contextObj, "patches", []),
    instructions: _.get(contextObj, "instructions", "")
  };
  const doc = new Hoover({
    input,
    output: response
  });

  await doc.save();

  return response;
};

const getLatestHoover = async function() {
  const doc = Hoover.find();
  return doc;
};

module.exports = {
  handleHooverInstructions,
  getLatestHoover
};
