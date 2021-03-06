import { Component, OnInit,OnChanges } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Tasks } from '../models/Tasks';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({  
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css', '../app.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit, OnChanges {

  tasks: Tasks[];

  constructor( private taskService: TaskService ) { 
    this.tasks = [];
  }
  
  ngOnInit() {
    this.getTasks();
  }

  ngOnChanges() {
    this.getTasks();
  }

  getTasks(): void{
      this.taskService.getTasks()
        .subscribe(response => this.tasks = response, error => console.log(error));
  }

  getCountAll(): number{
    return this.tasks.length;
  }

  getCountBy(selected: number): number{
    let res: number = 0;

    for(let task of this.tasks){
      if(task.Priority == selected){ res++; }
    }
    return res;
  }

  filterByCheck(selected: string): void{
    this.tasks.filter( it => {
      return (
        it.Priority.toString().toLowerCase().includes(selected)    
    ); 
    });
  }
}
