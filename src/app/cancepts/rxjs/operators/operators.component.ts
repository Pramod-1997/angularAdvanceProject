import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, of,filter, forkJoin } from 'rxjs';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss'
})
export class OperatorsComponent  {

  constructor(private httpClient: HttpClient){
    this.create()
  }

   url = "https://jsonplaceholder.typicode.com/users";



 
  create(){

    //  of(1,2,3).subscribe((val:any) => console.log(val));

//      of(1, 2, 3).pipe(
//   map((val:any) => val * 10)
// ).subscribe(console.log);
//  

  of(1, 2, 3, 4).pipe(
  filter((val:any) => val % 2 === 0)
).subscribe(console.log);

forkJoin({
  user: this.httpClient.get(this.url),
  orders: this.httpClient.get(this.url),
  cart: this.httpClient.get(this.url)
}).subscribe(result => {
  console.log(result.user);
  console.log(result.orders);
  console.log(result.cart);
});


 }

}
