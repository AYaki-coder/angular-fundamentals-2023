import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Course } from '../types';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
    @Input() public course!: Course;
    @Input() public isEditable!: boolean;

    @Output() public deleteRequest = new EventEmitter<string>();
    @Output() public editRequest = new EventEmitter();

    public title!: string;
    public description!: string;
    public creationDate!: Date;
    public duration!: number;
    public authors!: string[];

    public ngOnInit() {
        if (this.course) {
            this.title = this.course.title;
            this.description = this.course.description;
            this.creationDate = new Date(this.course.creationDate);
            this.duration = this.course.duration;
            this.authors = this.course.authors;
        }
    }
}
