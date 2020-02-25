import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyDataServiceService {
  // Main api url to call api
  uri = "http://localhost:4000/student";

  constructor(private http: HttpClient) {}

  // To Create/Add New Student

  addDetail(Name, Branch, Email, Phone) {
    const obj = {
      Name,
      Branch,
      Email,
      Phone
    };
    return this.http
      .post(`${this.uri}/addStudent`, obj)
      .subscribe(res => console.log("Done"));
  }

  // To Get The List Of Student

  getStudent() {
    return this.http.get(`${this.uri}`);
  }

  // To Get Student Details For Single Record Using Id
  editStudent(sdid) {
    return this.http.get(`${this.uri}/edit/${sdid}`);
  }

  updateStudent(Name, Branch, Email, Phone, sdid) {
    const obj = {
      Name: Name,
      Branch: Branch,
      Email: Email,
      Phone: Phone
    };
    this.http
      .post(`${this.uri}/update/${sdid}`, obj)
      .subscribe(res => console.log("Done"));
  }

  // To Delete Any Student
  deleteStudent(sdid) {
    return this.http.get(`${this.uri}/delete/${sdid}`);
  }
}
