import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() public title: string = 'Message';
    @Input() public message: string = 'Message text';
    @Input() public okButtonText: string = 'ok';
    @Input() public cancelButtonText: string = 'cancel';
    @Input() public isOpen!: boolean;

    @Output() public result = new EventEmitter<boolean>();
    @Output() public closeRequest = new EventEmitter();

    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }

    public onConfirm() {
        this.result.emit(true);
        this.onClose();
    }

    public onCancel() {
        this.result.emit(false);
        this.onClose();
    }

    public onClose() {
        this.closeRequest.emit();
        console.log('should be closed');
    }
}
