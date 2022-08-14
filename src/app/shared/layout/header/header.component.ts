import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'User',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-plus',
            routerLink: 'user/create'
          },
          {
            label: 'List',
            icon: 'pi pi-list',
            routerLink: 'user/list'
          },
        ],
      },
      {
        label: 'City',
        icon: 'pi pi-map',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-plus',
            routerLink: 'city/create'
          },
          {
            label: 'List',
            icon: 'pi pi-list',
            routerLink: 'city/list'
          }
        ],
      },
    ];

  }

}
