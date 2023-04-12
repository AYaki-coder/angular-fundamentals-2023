import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CreateEditPageComponent } from './page/create-edit-page/create-edit-page.component';
import { SharedModule } from "../../shared/shared.module";
import { CourseInfoPageComponent } from './page/course-info-page/course-info-page.component';



@NgModule({
    declarations: [
        CourseComponent,
        CreateEditPageComponent,
        CourseInfoPageComponent
    ],
    exports: [
        CourseComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule,
        SharedModule
    ]
})
export class CourseModule { }
