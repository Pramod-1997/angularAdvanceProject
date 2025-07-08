import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean): unknown {
    if(value){
      return 'Active'
    }else{
     return 'Inactive'  
    }
  
  }

}
