import { MyDataServiceService } from "../mydata.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"]
})
export class AddStudentComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private mydataservice: MyDataServiceService
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formbuilder.group({
      Name: ["", Validators.required],
      Branch: ["", Validators.required],
      Email: ["", Validators.required],
      Phone: ["", Validators.required]
    });
  }

  
  addDetail(Name, Branch, Email, Phone) {
    this.mydataservice.addDetail(Name, Branch, Email, Phone);
  }

  ngOnInit() {}
}
