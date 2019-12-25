import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdmiComponent } from './admi/admi.component';
import { TeacherComponent } from './teacher/teacher.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdmiComponent, 
    TeacherComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
