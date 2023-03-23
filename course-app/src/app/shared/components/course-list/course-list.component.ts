import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../types';
import { mockedCourseList } from './../../../course-list-mock';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
    @Input() public courses: Course[] = mockedCourseList;
    @Input() public isEditable!: boolean;

    @Output() public deleteRequest = new EventEmitter();
    @Output() public editRequest = new EventEmitter();
    @Output() public showRequest = new EventEmitter();

    public onDelete() {
        this.deleteRequest.emit();
        console.log('delete click');
    }

    public onEdit() {
        this.editRequest.emit();
        console.log('edit click');
    }

    public showCourse() {
        console.log('show course');
        this.showRequest.emit();
    }
}
