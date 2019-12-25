import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component'
import { LayoutComponent } from './dashboard/layout/layout.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path:'dashboard', component:LayoutComponent,
   children:[
     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'home',component:HomeComponent}
   ]
   },
  {path:'login',component:LoginComponent},
  {path:'' , redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
