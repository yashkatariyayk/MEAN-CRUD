import { MyDataServiceService } from "./../mydata.service";
import { Component, OnInit } from "@angular/core";
// import {Student} from '../student';
import { Router } from "@angular/router";

export interface Student {
  Name: String;
  Branch: String;
  Email: String;
  Phone: String;
}

@Component({
  selector: "app-get-student",
  templateUrl: "./get-student.component.html",
  styleUrls: ["./get-student.component.scss"]
})
export class GetStudentComponent implements OnInit {
  [x: string]: any;

  Students: Student[];
  constructor(
    private mydataservice: MyDataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.mydataservice.getStudent().subscribe((data: Student[]) => {
      this.Students = data;
    });
  }

  //Delete Student
  deleteStudent(sdid) {
    this.mydataservice.deleteStudent(sdid).subscribe(res => {
      console.log("Deleted");
    });
  }
}
