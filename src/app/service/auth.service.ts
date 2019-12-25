import { Injectable } from '@angular/core';
import {Auth} from '../shared/auth';
import {HttpHeaders,HttpClient, HttpResponse,} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  authUrl="http://localhost:4200/auth/auth";
  httpOptions = {
     headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Headers': 'Content-Type',

   })
 }
 AuthPost(auth:Auth):Observable<HttpResponse<Auth>>{
  
  return this.http.post<Auth>(this.authUrl,auth,{observe: 'response'})

   
}

}
