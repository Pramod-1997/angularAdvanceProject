import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("http called");
    
   }

  mySharedFunction(){

  }
}
