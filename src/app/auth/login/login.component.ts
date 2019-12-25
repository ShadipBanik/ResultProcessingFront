import { Component, OnInit } from '@angular/core';
import {Auth} from '../../shared/auth'
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { from } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  result:any;
  constructor(private authService:AuthService,private tokenService:TokenService,private route:Router,private form:FormBuilder) { }
  
  ngOnInit() {
    this.loginForm=this.form.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      
    })
   localStorage.setItem('auth','hello world')
   localStorage.clear();
        
  }
  login(){
 
           let formValue=this.loginForm.value;
           this.authService.AuthPost(formValue).subscribe(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            res=> {
              let token=res.headers.get('authorization').replace('Bearer', '').trim()
               console.log(token)
               this.tokenService.login(token);
               this.route.navigateByUrl('/dashboard');

            },
            res=> {
              alert(res.error);
            });
      }
    
       
   }

