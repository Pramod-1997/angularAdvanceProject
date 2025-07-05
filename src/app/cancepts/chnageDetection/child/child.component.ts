import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
   //changeDetection:ChangeDetectionStrategy.Default,
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

   @Input() counter: any;

  constructor(){
    console.log("child");
  }

   @Input() user: any;

   userData(){
    console.log(this.counter=1);
   }

    ngDoCheck(): void {
    console.log('🔄 Change detection ran in ChildComponent');
  }

}
