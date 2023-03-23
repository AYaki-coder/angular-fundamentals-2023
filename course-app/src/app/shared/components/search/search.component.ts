import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Input() public placeholder!: string;
    @Output() public requestSearch = new EventEmitter();

    onSubmit(searchForm: AbstractControl): void {
        console.log(searchForm);
        this.requestSearch.emit(searchForm.value.search);
    }
}
