import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {

   }

url = "https://jsonplaceholder.typicode.com/users";

  //  getUsers(){
  //   this.httpClient.get<any>(this.url).subscribe((data:any)=>{
  //     console.log("data",data);
  //   })
  //  }

  getusers(){
    return this.httpClient.get<any>(this.url);
  }
}
