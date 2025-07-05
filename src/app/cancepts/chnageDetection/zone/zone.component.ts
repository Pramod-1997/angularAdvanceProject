import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.scss'
})
export class ZoneComponent {

  constructor(public ngZone:NgZone){
 this.runOutsideAngularExample();
  }

 

  runOutsideAngularExample(){
  this.ngZone.runOutsideAngular(()=>{
    setTimeout(() => {
  }, 1000);
  }) 
  }



}
