import { Routes } from '@angular/router';
import { DashboardComponent } from './main_features/dashboard/dashboard.component';
import { MyClassesComponent } from './main_features/my-classes/my-classes.component';
import { UsersComponent } from './main_features/users/users.component';
import { AttendanceComponent } from './main_features/attendance/attendance.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'my-classes',
    component: MyClassesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
];
