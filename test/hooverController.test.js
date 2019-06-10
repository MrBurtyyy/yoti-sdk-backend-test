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

  test("getIndexOfMatchingDirtPatch - hoover on dirt patch (> -1)", done => {
    const hooverX = 13;
    const hooverY = 18;
    const patches = [[1, 3], [12, 25], [13, 18]];
    const patchIndex = hooverController.getIndexOfMatchingDirtPatch(
      hooverX,
      hooverY,
      patches
    );
    expect(patchIndex).toBeGreaterThan(-1);
    done();
  });

  test("getIndexOfMatchingDirtPatch - hoover not on dirt patch (== -1)", done => {
    const hooverX = 13;
    const hooverY = 18;
    const patches = [[1, 3], [12, 25]];
    const patchIndex = hooverController.getIndexOfMatchingDirtPatch(
      hooverX,
      hooverY,
      patches
    );
    expect(patchIndex).toEqual(-1);
    done();
  });

  test("checkAndRemoveDirtPatch - hoover on a dirt patch (item is removed)", done => {
    const hooverX = 13;
    const hooverY = 18;
    const patches = [[1, 3], [12, 25], [13, 18]];
    const expectedPatches = [[1, 3], [12, 25]];
    const newPatches = hooverController.checkAndRemoveDirtPatch(
      hooverX,
      hooverY,
      patches
    );
    expect(newPatches).toEqual(expectedPatches);
    done();
  });

  test("checkAndRemoveDirtPatch - hoover not a dirt patch (nothing is removed)", done => {
    const hooverX = 13;
    const hooverY = 12;
    const patches = [[1, 3], [12, 25], [13, 18]];
    const expectedPatches = [[1, 3], [12, 25], [13, 18]];
    const newPatches = hooverController.checkAndRemoveDirtPatch(
      hooverX,
      hooverY,
      patches
    );
    expect(newPatches).toEqual(expectedPatches);
    done();
  });
});
