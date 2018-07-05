import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Tasks } from '../models/Tasks';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css','../app.component.css']
})
export class ViewComponent implements OnInit, OnChanges{

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


}
