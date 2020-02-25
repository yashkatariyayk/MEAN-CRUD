import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MyDataServiceService } from "../mydata.service";
import { Router, ActivatedRoute } from "@angular/router";
import Student from "../student";
@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.scss"]
})
export class EditStudentComponent implements OnInit {
  [x: string]: Object;
  angForm: FormGroup;
  // sdid: string;
  studentDetail: Student;
  frmGroup: FormGroup;
  student: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mydataservice: MyDataServiceService,
    private formbuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formbuilder.group({
      Image: ["", Validators.required],
      Name: ["", Validators.required],
      Branch: ["", Validators.required],
      Email: ["", Validators.required],
      Phone: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mydataservice.editStudent(params["id"]).subscribe(res => {
        this.student = res;
      });
    });
  }

  updateStudent(Name, Branch, Email, Phone) {
    this.route.params.subscribe(params => {
      this.mydataservice.updateStudent(
        Name,
        Branch,
        Email,
        Phone,
        params["id"]
      );
      this.router.navigate(["/student"]);
    });
  }
}
