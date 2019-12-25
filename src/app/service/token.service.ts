import { Injectable } from '@angular/core';
import { Auth } from '../shared/auth';
import { Router } from '@angular/router';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private route:Router) { }


  public login(access_token:string):void{
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    this.route.navigateByUrl('/login')
  }
}
