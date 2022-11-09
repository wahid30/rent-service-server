const express = require("express");
const app = express();
var cors = require("cors");

const port = 5000;

// middle wares
app.use(cors());
app.use(express.json());

const myServices = require("./services.json");

app.get("/services", (req, res) => {
  res.send(myServices);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
