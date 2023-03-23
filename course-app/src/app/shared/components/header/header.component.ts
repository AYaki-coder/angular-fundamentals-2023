import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public loginText: string = 'Login';
    public logoutText: string = 'Logout';
    public userName!: string;
}
