import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
    //changeDetection:ChangeDetectionStrategy.Default,
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {

  username= 'Pramod'

ngOnInit(): void {
  this.count()
}

constructor(private changeDetectorRef:ChangeDetectorRef){

}

  onSearch(event:any){
console.log(event.target.value);
this.username = event.target.value
  }

  count(){
    setInterval(() => {
  // this.changeDetectorRef.detectChanges();
  console.log('tick');
}, 1000);

  }
  
}
