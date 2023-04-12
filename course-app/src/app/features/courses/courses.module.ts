import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ],
  exports:[
    CoursesComponent
  ]
})
export class CoursesModule { }
