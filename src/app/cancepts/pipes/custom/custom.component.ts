import { Component } from '@angular/core';
import { TruncatePipe } from '../custompipe/truncate.pipe';
import { StatusPipe } from '../custompipe/status.pipe';
import { FilterPipe } from '../custompipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [StatusPipe,FilterPipe,TruncatePipe,ReactiveFormsModule,FormsModule,NgFor],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

  userStarus:boolean =true;

searchText =''

users=[
   {name:'pramod',id:1},
     {name:'Nandini',id:2}
]

content = 'custom pipe is a class that implements PipeTransform interface and  allows you to define your own data transformation logic.'
}
