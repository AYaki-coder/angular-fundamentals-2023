import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  shouldOpenModalWindow: boolean = false;
  isEditable: boolean = true;
  
  onModalResult(modalResult: boolean){
    console.log('modalResult', modalResult?.toString())
  }

  openModalWindow(){
    console.log('open window');
    this.shouldOpenModalWindow = true;
  }

  closeModalWindow(){
    console.log('close window');
    this.shouldOpenModalWindow = false;
  }
}
