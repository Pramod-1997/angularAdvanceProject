import { NgIf } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked {

  // @Input() userState:any;
   @Input() user: any;
  @Output() navigate = new EventEmitter<'next' | 'previous'>();

  constructor(){
    console.log("child constructor called"); 
    console.log("constructor userState",this.user);
    
  }

  ngOnInit(): void {
    console.log(" ngOnInit called"); 
    console.log("ngOnInit userState",this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
     console.log(" ngOnChanges called"); 
      console.log("changes",changes);
      console.log(changes['user']);
    console.log("ngOnChanges userState",this.user);
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit called"); 
  }

  ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked called");  
  }

  ngAfterViewInit(): void {
     console.log("child ngAfterViewInit called"); 
  }

  ngAfterViewChecked(): void {
     console.log("child ngAfterViewChecked called"); 
  }





  goNext() {
    this.navigate.emit('next');
  }

  goPrevious() {
    this.navigate.emit('previous');
  }





}
