import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent implements OnInit {

  user$:any;

  constructor(private userService:UserService){

  }

  ngOnInit() {
     this.user$ = this.userService.getusers();
  }

  

 

}
