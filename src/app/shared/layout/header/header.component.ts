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
        label: 'Person',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Create',
            icon: 'pi pi-plus',
            routerLink: '/person/create'
          },
          {
            label: 'List',
            icon: 'pi pi-list',
            routerLink: '/person/list'
          },
        ],
      },
      {
        label: 'City',
        icon: 'pi pi-map',
        items: [
          {
            label: 'Create',
            icon: 'pi pi-plus',
            routerLink: '/city/create'
          },
          {
            label: 'List',
            icon: 'pi pi-list',
            routerLink: '/city/list'
          }
        ],
      },
    ];

  }

}
