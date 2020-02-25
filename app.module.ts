import { MyDataServiceService } from './mydata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    GetStudentComponent,
    EditStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [MyDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
