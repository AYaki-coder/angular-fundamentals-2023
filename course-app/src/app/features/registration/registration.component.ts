import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  @Output() goToLoginRequest = new EventEmitter();

  onLogin() {
    this.goToLoginRequest.emit();
  }

}
