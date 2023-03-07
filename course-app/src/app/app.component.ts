import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public userName: string = 'Harry Potter';
    public infoTitle: string = 'Your List Is Empty'
}
