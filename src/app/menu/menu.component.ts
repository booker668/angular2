import { Component, OnInit } from '@angular/core';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { User } from '../_models/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  currentUser: User;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 }

  ngOnInit() {
    this.items = [
      {
        label: '问题控件',
        icon: 'fa-file-o',
        items: [
          { label: '单选题',routerLink: "/menu/option"  },
          { label: '分值问题' },
          { label: '所有问题' },
          { label: '文本问题',routerLink: "/menu/questionnaire" }
        ]
      },
      {
        label: '问卷大纲',
        icon: 'fa-edit',

      },
      {
        label: '帮助',
        icon: 'fa-question',

      },


    ];
  }

}
