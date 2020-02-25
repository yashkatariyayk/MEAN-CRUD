const express = require("express");
bodyParser = require("body-parser");
cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const dbConfig = require("../backend/app/config/db");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
app.use(cors());
const studentRoutes = require("../backend/app/routes/route");

app.get("/", (req, res) => {
  res.json({ message: "welcome to student site" });
});

app.use("/student", studentRoutes);
app.listen(4000, () => {
  console.log("Server is listening on port 3000");
});
