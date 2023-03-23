import { Component, EventEmitter, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    public email!: string;
    public password!: string;
    public iconName: IconProp = 'eye';

    @Output() public registrationRequest = new EventEmitter();

    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }

    public onRegistration(): void {
        this.registrationRequest.emit();
    }

    public onSubmit(loginForm: string): void {
        console.log(loginForm);
    }

    public toggleIcon(): void {
        if (this.iconName === 'eye') {
            this.iconName = 'eye-slash';
        } else {
            this.iconName = 'eye';
        }
    }
}
