import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockedCourseList } from '../../../../course-list-mock';

@Component({
    selector: 'app-course-info-page',
    templateUrl: './course-info-page.component.html',
    styleUrls: ['./course-info-page.component.scss'],
})
export class CourseInfoPageComponent implements OnInit {
    public id!: string;
    public title!: string;
    public description!: string;
    public creationDate!: Date;
    public duration!: number;
    public authors!: string[];

    constructor(private route: ActivatedRoute) {}

    public ngOnInit() {
        const courseId = this.route.snapshot.paramMap.get('id');
        const course = mockedCourseList.find((el) => el.id === courseId);
        if (course) {
            this.title = course.title;
            this.description = course.description;
            this.creationDate = new Date(course.creationDate);
            this.duration = course.duration;
            this.authors = course.authors;
        }
    }
}
