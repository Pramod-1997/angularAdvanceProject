import { Component, inject } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  constructor(){

  }

  counterService = inject(CounterService);

  increment() {
    this.counterService.increment();
  }

}
