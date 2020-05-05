import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('logged in now!!');
      },
      (error) => {
        console.log('Error occured!!');
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out now!!');
  }
}
