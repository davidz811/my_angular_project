import { Component,OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  getStudents(){
    this.employeeService.getEmployees().subscribe(result=>
      {
        this.employees = result;
      });
  }
  //addStudent(){
  //   let newStudent = {Name: this.newStudentName, Alter: this.newStudentAlter};
  //   this.studentService.addStudent(newStudent);
  //}
}
