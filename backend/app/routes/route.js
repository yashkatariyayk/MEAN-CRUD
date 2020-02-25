const express = require("express");
const app = express();
const studentRoute = express.Router();

let studentModel = require("../model/model");

// To Get List Of students
studentRoute.route("/").get(function(req, res) {
  studentModel.find(function(err, student) {
    if (err) {
      console.log(err);
    } else {
      res.json(student);
    }
  });
});

// To Add New student
studentRoute.route("/addStudent").post(function(req, res) {
  let student = new studentModel(req.body);
  student
    .save()
    .then(studentdata => {
      res.status(200).json({ student: "student Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

// To Get student Details By student ID
studentRoute.route("/").get(function(req, res) {
  let id = req.params.id;
  studentModel.findById(id, function(err, student) {
    res.json(student);
  });
});

// Defined edit route
studentRoute.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  studentModel.findById(id, function(err, student) {
    res.json(student);
  });
});

// To Update The student Details
studentRoute.route("/update/:id").post(function(req, res) {
  studentModel.findById(req.params.id, function(err, student) {
    if (!student) return next(new Error("Unable To Find student With This Id"));
    else {
      student.Name = req.body.Name;
      student.Branch = req.body.Branch;
      student.Email = req.body.Email;
      student.Phone = req.body.Phone;

      student
        .save()
        .then(student => {
          res.json("student Updated Successfully");
        })
        .catch(err => {
          res.status(400).send("Unable To Update student");
        });
    }
  });
});

// To Delete The Student
studentRoute.route("/delete/:id").get(function(req, res) {
  studentModel.findByIdAndRemove({ _id: req.params.id }, function(
    err,
    student
  ) {
    if (err) res.json(err);
    else res.json("Student Deleted Successfully");
  });
});

module.exports = studentRoute;
