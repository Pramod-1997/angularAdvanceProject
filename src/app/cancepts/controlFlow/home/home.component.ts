import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  a=10
  b=2;

  role = 'admin'

  items =[
    {name:'pramod',id:1}
  ]


}
