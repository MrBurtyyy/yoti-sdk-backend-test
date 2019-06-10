const _ = require("lodash");
const hooverController = require("./hooverController");

const handleHooverInstructions = async function(contextObj) {
  const response = hooverController.runHoover(contextObj);

  return response;
};

module.exports = {
  handleHooverInstructions
};
