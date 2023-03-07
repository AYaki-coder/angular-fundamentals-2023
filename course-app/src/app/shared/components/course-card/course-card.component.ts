import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../types';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
    @Input() course!: Course;
    @Input() isEditable!: boolean;

    @Output() deleteRequest = new EventEmitter<string>();
    @Output() editRequest = new EventEmitter();

    title!: string;
    description!: string;
    creationDate!: Date;
    duration!: number;
    authors!: string[];

    ngOnChanges() {
        this.title = this.course.title;
        this.description = this.course.description;
        this.creationDate = new Date(this.course.creationDate);
        this.duration = this.course.duration;
        this.authors = this.course.authors;
    }

    getDuration(minutes: number) {
        let hours = Math.floor(minutes / 60).toString();
        hours = hours.length === 1 ? 0 + hours : hours;
        const min = minutes % 60;

        return `${hours}:${min}`;
    }
}
