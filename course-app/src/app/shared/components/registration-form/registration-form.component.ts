import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
    form!: FormGroup;
    @Output() goToLoginRequest = new EventEmitter();

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            name: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
            password: new FormControl('', Validators.required),
        });
    }

    onLogin() {
        this.goToLoginRequest.emit();
    }

    onSubmit(form: any) {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
        }
        console.log(form);

        return
    }
}
