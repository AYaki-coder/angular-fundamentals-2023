import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
    public form!: FormGroup;
    public iconName: IconProp = 'eye';

    @Output() public goToLoginRequest = new EventEmitter();

    get email(): AbstractControl | null  {
        return this.form.get('email');
    }

    get name(): AbstractControl | null  {
        return this.form.get('name');
    }

    get password(): AbstractControl | null  {
        return this.form.get('password');
    }

    public ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            name: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
            password: new FormControl('', Validators.required),
        });
    }

    public onLogin(): void {
        this.goToLoginRequest.emit();
    }

    public onSubmit(form: AbstractControl): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
        }
        console.log(form);
    }

    public toggleIcon(): void {
        if (this.iconName === 'eye') {
            this.iconName = 'eye-slash';
        } else {
            this.iconName = 'eye';
        }
    }
}
