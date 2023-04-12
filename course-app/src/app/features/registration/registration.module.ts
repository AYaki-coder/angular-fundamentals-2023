import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
