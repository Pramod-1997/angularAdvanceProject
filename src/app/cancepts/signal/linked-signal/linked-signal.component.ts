import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {

//  usd = signal(100);

//   inr = linkedSignal({
//     get: () => this.usd() * 83,
//     set: (val) => this.usd.set(val / 83)
//   });

}
