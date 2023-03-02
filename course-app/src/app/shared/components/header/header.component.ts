import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loginText: string = 'Login';
  logoutText: string = 'Logout';
  userName: string = 'Harry Potter';
}
