import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor(private sharedService:SharedService) { }

  multiple(a: number, b: number) {
    this.sharedService.mySharedFunction();
    return a * b
  }

   add(a: number, b: number) {
    return a + b
  }
}
