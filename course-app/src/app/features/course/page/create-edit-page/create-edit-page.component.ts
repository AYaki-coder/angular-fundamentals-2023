import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-edit-page',
    templateUrl: './create-edit-page.component.html',
    styleUrls: ['./create-edit-page.component.scss'],
})
export class CreateEditPageComponent implements OnInit {
    public courseId!: string | null;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.courseId = this.route.snapshot.paramMap.get('id');
    }
}
