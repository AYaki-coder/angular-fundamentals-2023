import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CreateEditPageComponent } from './page/create-edit-page/create-edit-page.component';
import { CourseInfoPageComponent } from './page/course-info-page/course-info-page.component';

const routes: Routes = [
    {
        path: '',
        component: CourseComponent,
    },
    {
        path: 'add',
        component: CreateEditPageComponent,
    },
    {
        path: ':id',
        component: CourseInfoPageComponent,
    },
    {
        path: 'edit/:id',
        component: CreateEditPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CourseRoutingModule {}
