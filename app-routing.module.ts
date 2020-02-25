import { GetStudentComponent } from "./get-student/get-student.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditStudentComponent } from "./edit-student/edit-student.component";

const routes: Routes = [
  { path: "student/create", component: AddStudentComponent },
  { path: "edit/:id", component: EditStudentComponent },
  { path: "student", component: GetStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
