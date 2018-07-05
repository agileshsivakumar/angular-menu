import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  public menus = [
    {
      id: 1,
      name: 'Dashboard'
    },
    {
      id: 2,
      name:
        'Profile' /* ,
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ] */
    }
  ];

  public options = {};

  public menuClicked(tree) {
    switch (tree.node.data.id) {
      case 1:
        this.router.navigate(['dashboard']);
        break;
      case 2:
        this.router.navigate(['profile']);
        break;

      default:
        break;
    }
  }
}
