import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userName = '';
  public password = '';
  constructor(public userService: UserService, private router: Router) {}

  singIn() {
    this.userService.authenticateUser('Agilesh', 'admin');
    if (this.userName === 'admin' && this.password === 'admin') {
      this.userService.setUserDetails(this.userName);
      this.router.navigate(['dashboard']);
    }
  }
}
