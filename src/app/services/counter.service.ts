import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  count = signal(0);

  constructor() { }

   increment() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
