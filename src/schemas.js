const HooverSchema = {
  type: "object",
  required: ["roomSize", "coords"],
  properties: {
    roomSize: {
      type: "array",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    coords: {
      type: "array",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
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
