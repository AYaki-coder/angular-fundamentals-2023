import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    @Output() public goToLoginRequest = new EventEmitter();

    public onLogin() {
        this.goToLoginRequest.emit();
    }
}
