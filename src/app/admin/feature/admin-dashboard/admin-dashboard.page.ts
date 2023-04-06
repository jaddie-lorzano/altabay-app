import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss']
})
export class AdminDashboardPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public menuItems = [
    {    name: 'Dashboard',    icon: 'dashboard'  },
    {    name: 'Accounts',    icon: 'account_box'  },
    {    name: 'Activities',    icon: 'event'  },
    {    name: 'Consultants',    icon: 'people'  },
    {    name: 'Projects',    icon: 'folder'  },
    {    name: 'Bookings',    icon: 'schedule'  },
    {    name: 'Financials',    icon: 'attach_money'  },
    {    name: 'Calendar',    icon: 'date_range'  },
    {    name: 'Documentation',    icon: 'description'  },
    {    name: 'Forms',    icon: 'list_alt'  },
    {    name: 'Settings',    icon: 'settings'  }
  ];
  public cards = [
    {
      title: 'Booking Requests',
      items: ['Request #1', 'Request #2', 'Request #3']
    },
    {
      title: 'Available Consultants',
      items: ['Consultant #1', 'Consultant #2', 'Consultant #3']
    },
    {
      title: 'Projects',
      items: [
        {
          name: 'Project #1',
          deadline: '2023-06-30',
          status: 'In Progress'
        },
        {
          name: 'Project #2',
          deadline: '2023-05-15',
          status: 'Completed'
        },
        {
          name: 'Project #3',
          deadline: '2023-08-31',
          status: 'Planned'
        }
      ]
    },
    {
      title: 'Schedule',
      items: [
        {
          title: 'Meeting with Client A',
          start: '2023-04-10T09:00:00',
          end: '2023-04-10T10:00:00'
        },
        {
          title: 'Consultant B Training',
          start: '2023-04-15T13:00:00',
          end: '2023-04-15T17:00:00'
        },
        {
          title: 'Project C Meeting',
          start: '2023-04-20T10:00:00',
          end: '2023-04-20T12:00:00'
        }
      ]
    }
  ];

}
