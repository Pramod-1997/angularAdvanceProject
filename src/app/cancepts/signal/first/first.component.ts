import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  data = 100

  count = signal(100)
  value = computed(() => 20)
  a = signal(10);
  b = signal(10);
  c = computed(() => this.a() + this.b())


  counterService = inject(CounterService); // signal is reactive here


  constructor() {
    effect(() => {
      //console.log("variable",this.data);
      console.log("signal", this.count());

    })
  }

  updateValue() {
    // this.data = 8
    this.count.set(8)
  }

  // in variable if we update a value, c value will not update
  updateC() {
    console.log("c value", this.c());
    this.a.set(40)
    console.log("c value", this.c());
  }

}
