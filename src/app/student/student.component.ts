import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student :Student= new Student;
  students : Student[] =[];

  constructor() { }

  ngOnInit() {
  }
  
  getFirstName() :string {
    return this.student.firstName;
  }
  getLastName ():string {
    return this.student.lastName;
  }

  getFullName () :string {
    return this.student.firstName + " " + this.student.lastName;
  }
  setFirstName (firstName : string){
    this.student.firstName = firstName;
  }
  setLastName (lastName : string){
    this.student.lastName = lastName;
  }
  addStudent (firstName :string,lastName:string){
    var newStudent = new Student;
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    this.students.push(newStudent);
  }

}
