import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() title: string = 'Message';
    @Input() message: string = 'Message text';
    @Input() okButtonText: string = 'ok';
    @Input() cancelButtonText: string = 'cancel';
    @Input() isOpen!: boolean;

    @Output() result = new EventEmitter<boolean>();
    @Output() closeRequest = new EventEmitter();

    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }

    onConfirm() {
        this.result.emit(true);
        this.onClose();
    }

    onCancel() {
        this.result.emit(false);
        this.onClose();
    }

    onClose() {
        this.closeRequest.emit();
        console.log('should be closed');
    }
}
