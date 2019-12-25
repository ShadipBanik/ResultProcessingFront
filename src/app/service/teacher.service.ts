import { Injectable } from '@angular/core';
import {Teacher} from '../shared/teacher';
import {HEROES} from '../shared/mock-teacher'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl="http://127.0.0.1:8000/api/teachers"
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      
    }),
    observe:'response'   
  }
  constructor(private http:HttpClient) { }

  teacherGet():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl)
  }
}
