import { Routes } from '@angular/router';
import { DashboardComponent } from './main_features/dashboard/dashboard.component';
import { MyClassesComponent } from './main_features/my-classes/my-classes.component';
import { UsersComponent } from './main_features/users/users.component';
import { AttendanceComponent } from './main_features/attendance/attendance.component';
import { LeaveComponent } from './main_features/leave/leave.component';
import { RequestComponent } from './main_features/request/request.component';
import { AnalyticsComponent } from './main_features/analytics/analytics.component';

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
  {
    path: 'leave',
    component: LeaveComponent,
  },
  {
    path: 'request',
    component: RequestComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
];
