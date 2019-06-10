const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  test("It should return a 200 status code", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the hoover path", () => {
  test("End to end test 1 (valid data)", done => {
    const payload = {
      roomSize: [5, 5],
      coords: [1, 2],
      patches: [[1, 0], [2, 2], [2, 3]],
      instructions: "NNESEESWNWW"
    };

    const expectedResponse = {
      coords: [1, 3],
      patches: 1
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 2 (valid data)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]],
      instructions: "NSEESSWNEEEEEENNNNNNEEEEEEE"
    };

    const expectedResponse = {
      coords: [25, 18],
      patches: 3
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 3 (instructions go off grid)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]],
      instructions: "NSEESSWNEEEEEENNNNNNEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNN"
    };

    const expectedResponse = {
      coords: [25, 25],
      patches: 3
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 4 (no patches)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      patches: [],
      instructions: "NSEESSWNEEEEEENNNNNNEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNN"
    };

    const expectedResponse = {
      coords: [25, 25],
      patches: 0
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 5 (no instructions)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]],
      instructions: ""
    };

    const expectedResponse = {
      coords: [12, 13],
      patches: 0
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 6 (no room size supplied)", done => {
    const payload = {
      coords: [12, 13],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]],
      instructions: ""
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test("End to end test 7 (no coords supplied)", done => {
    const payload = {
      roomSize: [25, 25],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]],
      instructions: ""
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test("End to end test 8 (no patches supplied)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      instructions: "NSEESSWNEEEEEENNNNNNEEEEEEE"
    };

    const expectedResponse = {
      coords: [25, 18],
      patches: 0
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });

  test("End to end test 9 (no instructions supplied)", done => {
    const payload = {
      roomSize: [25, 25],
      coords: [12, 13],
      patches: [[12, 14], [17, 12], [22, 18], [1, 1]]
    };

    const expectedResponse = {
      coords: [12, 13],
      patches: 0
    };

    request(app)
      .post("/hoover")
      .send(payload)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse);
        done();
      });
  });
});
