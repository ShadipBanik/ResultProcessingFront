import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit() {
  }
  
  logOut(){

    this.tokenService.logout()
  }

}
