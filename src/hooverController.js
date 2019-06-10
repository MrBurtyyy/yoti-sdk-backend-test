const _ = require("lodash");

const getValidPosition = (roomX, roomY, hooverX, hooverY) => {
  let newHooverX = hooverX;
  let newHooverY = hooverY;

  if (hooverX < 0) {
    newHooverX = 0;
  }
  if (hooverX > roomX) {
    newHooverX = roomX;
  }
  if (hooverY < 0) {
    newHooverY = 0;
  }
  if (hooverY > roomY) {
    newHooverY = roomY;
  }

  return [newHooverX, newHooverY];
};

const getIndexOfMatchingDirtPatch = (hooverX, hooverY, patches) => {
  return _.findIndex(
    patches,
    patch => patch[0] === hooverX && patch[1] === hooverY
  );
};

const checkAndRemoveDirtPatch = (hooverX, hooverY, patches) => {
  const tmpPatches = [...patches];
  const patchIndex = getIndexOfMatchingDirtPatch(hooverX, hooverY, tmpPatches);
  if (patchIndex > -1) {
    tmpPatches.splice(patchIndex, 1);
  }
  return tmpPatches;
};

const runHoover = contextObj => {
  const roomX = _.get(contextObj, "roomSize")[0];
  const roomY = _.get(contextObj, "roomSize")[1];
  let hooverX = _.get(contextObj, "coords")[0];
  let hooverY = _.get(contextObj, "coords")[1];
  const initialPatches = _.get(contextObj, "patches", []); // Default value of empty array if not supplied
  const instructions = _.get(contextObj, "instructions", "").split(""); // Default value of empty string if not supplied

  // Do an initial check to see if we are on top of a dirt patch already.
  let newPatches = checkAndRemoveDirtPatch(hooverX, hooverY, initialPatches);

  instructions.forEach(instruction => {
    switch (instruction.toUpperCase()) {
      case "N":
        hooverY += 1;
        break;
      case "E":
        hooverX += 1;
        break;
      case "S":
        hooverY -= 1;
        break;
      case "W":
        hooverX -= 1;
        break;
      default:
        console.log("Invalid instruction");
    }

    const validPosition = getValidPosition(roomX, roomY, hooverX, hooverY);
    hooverX = validPosition[0];
    hooverY = validPosition[1];

    newPatches = checkAndRemoveDirtPatch(hooverX, hooverY, newPatches);
  });

  const numberOfPatchesCleaned = initialPatches.length - newPatches.length;

  return {
    coords: [hooverX, hooverY],
    patches: numberOfPatchesCleaned
  };
};

module.exports = {
  runHoover,
  getValidPosition,
  getIndexOfMatchingDirtPatch,
  checkAndRemoveDirtPatch
};
