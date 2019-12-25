import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdmiComponent } from './admi/admi.component';
import { TeacherComponent } from './teacher/teacher.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'admin', component: AdmiComponent},
      { path:'teacher', component: TeacherComponent}

    ]
  },
];