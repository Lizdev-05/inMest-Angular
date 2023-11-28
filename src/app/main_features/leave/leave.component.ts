import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
})
export class LeaveComponent implements OnInit {
  leaves = [
    {
      id: 1,
      leave_type: 'Maternity',
      start_day: 'Dec 20, 2024',
      end_date: 'Mar 20, 2024',
      created_by: 'Oyinlade',
      status: 'Approved',
      last_modified: 'Nov 27, 2023',
      approve_by: 'Deyemi Presh',
    },

    {
      id: 2,
      leave_type: 'Beacation',
      start_day: 'Jan 26th, 2024',
      end_date: 'Feb 05, 2024',
      created_by: 'Suad',
      status: 'Pending',
      last_modified: 'Dec 27, 2023',
      approve_by: 'Xarri the Namibia',
    },
  ];

  viewLeave: any;

  ngOnInit(): void {}
}
