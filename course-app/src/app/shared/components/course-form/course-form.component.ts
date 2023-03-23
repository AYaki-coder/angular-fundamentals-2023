import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
    public form!: FormGroup;

    constructor(private fb: FormBuilder, library: FaIconLibrary) {
        library.addIconPacks(fas);
    }

    get title(): AbstractControl | null {
        return this.form.get('title');
    }

    get description(): AbstractControl | null {
        return this.form.get('description');
    }

    get duration(): AbstractControl | null {
        return this.form.get('duration');
    }

    get newAuthor(): AbstractControl | null {
        return this.form.get('newAuthor');
    }

    get author(): AbstractControl<any, any> | null | undefined {
        return this.form.get('newAuthor')?.get('author');
    }

    get authors(): FormArray {
        return this.form.get('authors') as FormArray;
    }

    public ngOnInit(): void {
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            duration: ['', [Validators.required, Validators.min(0)]],
            newAuthor: this.fb.group({ author: ['', Validators.pattern(/[A-Za-z0-9]/)] }),
            authors: this.fb.array([]),
        });
    }

    public onAdd(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
        }
        console.log(this.form);
    }

    public addAuthor(): void {
        if (this.author?.invalid) {
            return;
        }

        const newControl = new FormControl(this.author?.value);
        newControl.disable();
        this.authors.push(newControl);
    }
}
