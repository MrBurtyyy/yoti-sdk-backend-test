# yoti-sdk-backend-test

Application code for the Yoti SDK Backend Test written by Alex Burt

![Build Status](https://travis-ci.com/MrBurtyyy/yoti-sdk-backend-test.svg?branch=master) ![Coverage Status](https://coveralls.io/repos/github/MrBurtyyy/yoti-sdk-backend-test/badge.svg?branch=master)

# Installation

Clone the application code from this repository:

```bash
git clone https://github.com/MrBurtyyy/yoti-sdk-backend-test.git
cd yoti-sdk-backend-test
```

The version of Docker used in development is `18.09.0`

# Running the application

A Docker service has been defined using docker-compose. To run the application, use the following command:

```bash
docker-compose up
```

This will download and build the relevant images. The web-service will be built from the Dockerfile stored in the directory.
All of the relevant ports are exposed (8080 for the web-service). The port for the MongoDB is not exposed (only to be used by the web-service).

# Usage

The web-service is configured to handle the request using the `/hoover` endpoint.

An example curl request would be:

```bash
curl -X POST -H "Content-Type: application/json" "http://localhost:8080/hoover" -d @data.json
```

A list of all records stored in the database can be found using the `/hoover/all` endpoint. Example curl request:

```bash
curl "http://localhost:8080/hoover/all"
```

This will return a JSON formatted array with the following document structure:

```json
{
  "_id": "5d00ebe2239e760021c9e05c",
  "input": {
    "roomSize": [5, 5],
    "coords": [1, 2],
    "patches": [[1, 0], [2, 2], [2, 3]],
    "_id": "5d00ebe2239e760021c9e05d",
    "instructions": "NNESEESWNWW"
  },
  "output": {
    "coords": [1, 3],
    "_id": "5d00ebe2239e760021c9e05e",
    "patches": 1
  },
  "__v": 0
}
```

# Testing

A suite of end-to-end and unit tests have been written for this application. To run the tests, execute the following commands:

```bash
npm install
npm run test
```

This uses `jest` and `supertest` to run mock API calls using a variety of data to test the robustness of the system.
In order to facilitate database connections, an in-memory version of MongoDB is used with the `@shelf/jest-mongodb` preset.

# Assumptions

Some assumptions around the challenge have been made and are listed below:

- The `instructions` and `patches` fields are not required for the application to run (tests created to confirm this)
- If the hoover's starting position is on a patch of dirt, this dirt is counted in the final count.
