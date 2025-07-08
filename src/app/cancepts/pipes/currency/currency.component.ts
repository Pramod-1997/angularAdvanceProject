import { CurrencyPipe, DecimalPipe, KeyValuePipe, NgFor, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { StatusPipe } from '../custompipe/status.pipe';
import { FilterPipe } from '../custompipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CurrencyPipe,DecimalPipe,PercentPipe,KeyValuePipe,NgFor,StatusPipe,FilterPipe,ReactiveFormsModule,FormsModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent {

   b: number = 100.95;
   value = 1234.56789;
    value2 = 1
    percentage = 0.87234;
    userStarus:boolean =false;

    userDetails = {
  name: 'Pramod',
  age: 27,
  role: 'Frontend Developer'
};
searchText =''
users=[
   {name:'pramod',id:1},
     {name:'Nandini',id:2}
]


}
