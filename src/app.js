const express = require("express");
const bodyParser = require("body-parser");

// JSON validator middleware for checking the body passed to the handler
const {
  Validator,
  ValidationError
} = require("express-json-validator-middleware");
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance
const validate = validator.validate;

const routes = require("./routes");
const { HooverSchema } = require("./schemas");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send();
});
app.post("/hoover", validate({ body: HooverSchema }), (req, res, next) => {
  routes
    .handleHooverInstructions(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(next);
});

// Error handler for validation errors
app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(400).send("Invalid request");
    next();
  } else next(err);
});

module.exports = app;
