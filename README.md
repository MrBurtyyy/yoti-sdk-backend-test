# yoti-sdk-backend-test

Application code for the Yoti SDK Backend Test written by Alex Burt

# Installation

Clone the application code from this repository:

```bash
https://github.com/MrBurtyyy/yoti-sdk-backend-test.git
```

The version of Node.js used in development is `v10.15.3`

Navigate into the directory and run:

```bash
npm install
```

# Running the application

For ease of use, `Nodemon` is used to run the web service as ES6 syntax is used and would require transpiling to run natively using Node.

To run the application, run the following command:

```bash
npm start
```

This will start a nodemon process running the web-service. The web-service runs on port `8080`

# Usage

The web-service is configured to handle the request using the `/hoover` endpoint.

An example curl request would be:

```bash
curl -X POST -H "Content-Type: application/json" "http://localhost:8080/hoover" -d @data.json
```
