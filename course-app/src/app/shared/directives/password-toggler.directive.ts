import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appPasswordToggler]',
    exportAs: 'passwordToggler',
})
export class PasswordTogglerDirective {
    constructor(private el: ElementRef) {}

    public toggle(): void {
        if (this.el.nativeElement.type === 'password') {
            this.el.nativeElement.type = 'text';
        } else {
            this.el.nativeElement.type = 'password';
        }
    }
}
