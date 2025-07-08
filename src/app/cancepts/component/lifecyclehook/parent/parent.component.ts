import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit,AfterViewChecked {

  constructor(){
    console.log("parent constructor called");
    
  }

  users = [
    { name: 'Pramod', age: 27 },
    { name: 'Aishwarya', age: 25 },
    { name: 'Naveen', age: 30 }
  ];

  currentIndex = 0;

  onNavigate(direction: 'next' | 'previous') {
    if (direction === 'next' && this.currentIndex < this.users.length - 1) {
      this.currentIndex++;
    } else if (direction === 'previous' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  ngAfterViewInit(): void {
     console.log("parent ngAfterViewInit called"); 
  }

  ngAfterViewChecked(): void {
     console.log("parent ngAfterViewChecked called"); 
  }

}
