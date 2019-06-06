const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/hoover", (req, res, next) => {
  console.log(req.body);
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(8080, () => console.log(`Listening on port 8080!`));
