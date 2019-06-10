const hooverController = require("../src/hooverController");

describe("Test the hoover controller", () => {
  const roomX = 25;
  const roomY = 25;

  test("getValidPosition - overflow X bounds", done => {
    const hooverX = 26;
    const hooverY = 10;
    const validPosition = hooverController.getValidPosition(
      roomX,
      roomY,
      hooverX,
      hooverY
    );
    expect(validPosition).toEqual([roomX, 10]);
    done();
  });

  test("getValidPosition - overflow Y bounds", done => {
    const hooverX = 10;
    const hooverY = 26;
    const validPosition = hooverController.getValidPosition(
      roomX,
      roomY,
      hooverX,
      hooverY
    );
    expect(validPosition).toEqual([10, roomY]);
    done();
  });

  test("getValidPosition - overflow X and Y bounds", done => {
    const hooverX = 26;
    const hooverY = 26;
    const validPosition = hooverController.getValidPosition(
      roomX,
      roomY,
      hooverX,
      hooverY
    );
    expect(validPosition).toEqual([roomX, roomY]);
    done();
  });
});
