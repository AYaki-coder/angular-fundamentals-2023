import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    email!: string;
    password!: string;

    @Output() registrationRequest = new EventEmitter();

    onRegistration() {
        this.registrationRequest.emit();
    }

    onSubmit(email: string) {
        
        console.log(email);
    }
}
