import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { Tasks } from '../models/Tasks';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({ 
  providedIn: 'root'
})

export class TaskService {

  private jsonFileUrl = 'https://raw.githubusercontent.com/RafatKhandaker/Software-Engineering-EagleEye/master/Web/JavaScript/api.json';

  constructor(
    private http: Http,
  ) { }

  getTasks() : Observable<Tasks[]>{
    return this.http.get( this.jsonFileUrl )
        .map((response: Response) =>{
          return<Tasks[]> response.json()
        })
        .catch(this.handleError());     
      
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
