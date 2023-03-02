import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../types';
import { mockedCourseList } from './../../../course-list-mock';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
    @Input() courses: Course[] = mockedCourseList;
    @Input() isEditable!: boolean;

    @Output() deleteRequest = new EventEmitter();
    @Output() editRequest = new EventEmitter();
    @Output() showRequest = new EventEmitter();

    onDelete() {
      this.deleteRequest.emit();
      console.log('delete click');
    }
    
    onEdit() {
      this.editRequest.emit();
      console.log('edit click');
    }

    showCourse() {
      console.log('show course');
      this.showRequest.emit();
    }
}
