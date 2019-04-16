import { Component, OnInit } from '@angular/core';
import { Task } from './Task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks : Task[] = [];
  name : string ="Mohamed";

  constructor() { }

  ngOnInit() {
  }
  addNewTask (title:string){
    var task :Task = new Task();
    task.title = title;
    this.tasks.push(task);
   
  }

  delete (i:number){
    this.tasks.splice(i,1);
  }

  changeStatus (i:number) {
    this.tasks[i].status =!this.tasks[i].status;
  }

   getPendingTaskCount () : number {

    return this.tasks.filter(task=>!task.status).length;
   }

}
