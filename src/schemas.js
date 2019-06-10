const HooverSchema = {
  type: "object",
  required: ["roomSize", "coords"],
  properties: {
    roomSize: {
      type: "array",
      items: {
        type: "number"
      }
    },
    coords: {
      type: "array",
      items: {
        type: "number"
      }
    },
    patches: {
      type: "array",
      items: {
        type: "array",
        items: {
          type: "number"
        }
      }
    },
    instructions: {
      type: "string"
    }
  }
};

module.exports = {
  HooverSchema
};
