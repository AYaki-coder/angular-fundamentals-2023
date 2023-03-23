import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    CourseCardComponent,
    CourseListComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CourseFormComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { PasswordTogglerDirective } from './directives/password-toggler.directive';

const components = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ModalComponent,
    CourseCardComponent,
    CourseListComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CourseFormComponent,
];

@NgModule({
    declarations: [components, EmailValidatorDirective, DurationPipe, CreationDatePipe, PasswordTogglerDirective],
    imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
    exports: [components],
})
export class SharedModule {}
