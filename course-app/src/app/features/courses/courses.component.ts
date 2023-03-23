import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
    public shouldOpenModalWindow: boolean = false;
    public isEditable: boolean = true;

    public onModalResult(modalResult: boolean): void {
        console.log('modalResult', modalResult?.toString());
    }

    public openModalWindow(): void {
        console.log('open window');
        this.shouldOpenModalWindow = true;
    }

    public closeModalWindow(): void {
        console.log('close window');
        this.shouldOpenModalWindow = false;
    }
}
