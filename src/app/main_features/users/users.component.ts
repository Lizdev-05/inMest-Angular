import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      first_name: 'Lucky',
      last_name: 'Dogbey',
      email: 'dogbey@gmail.com',
      cohort: '2024',
    },

    {
      id: 2,
      first_name: 'Oyin',
      last_name: 'Lade',
      email: 'lade@gmail.com',
      cohort: '2024',
    },

    {
      id: 3,
      first_name: 'Obehi',
      last_name: 'Ataga',
      email: 'ataga@gmail.com',
      cohort: '2024',
    },

    {
      id: 4,
      first_name: 'Precious',
      last_name: 'Deyemi',
      email: 'presh@gmail.com',
      cohort: '2024',
    },
  ];

  viewUser: any;

  deleteUser(user: any): void {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  ngOnInit(): void {}
}
