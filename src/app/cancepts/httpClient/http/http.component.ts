import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss'
})
export class HttpComponent implements OnInit {


  constructor(private userService:UserService){

  }


  ngOnInit(): void {
    
  }

  getUsers(){
    this.userService.getusers().subscribe(resp=> {
      console.log("resp",resp);
      
    })
  }


}
