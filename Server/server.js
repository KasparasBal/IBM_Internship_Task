const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cors
cors();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, PUT, OPTIONS"
  );
  next();
});

//Post of user Data (from front end)
app.post("/", (req, res) => {
  console.log(req.body.company);
  console.log(req.body.stocks);
});

///////Listen to Server
//Port
const port = 3050;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
