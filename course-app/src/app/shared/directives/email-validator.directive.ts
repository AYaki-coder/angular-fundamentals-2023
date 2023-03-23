import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appEmailValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        },
    ],
})
export class EmailValidatorDirective implements Validator {
    constructor() {}
    public validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (!control.value) {
            return null;
        }
        const match = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValid = match.test(control.value);
        console.log('validate', control.value, 'isValid', isValid);
        return !isValid ? { invalidEmail: { value: control.value } } : null;
    }
}
