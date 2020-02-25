const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Student = new Schema(
  {
    Name: {
      type: String
    },
    Branch: {
      type: String
    },
    Email: {
      type: String
    },
    Phone: {
      type: Number
    }
  },
  {
    collection: "studentdata"
  }
);

module.exports = mongoose.model("Student", Student);
