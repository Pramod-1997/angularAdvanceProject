import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {

  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {

  }


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    console.log("obsrvable start");
    const users$ = this.httpClient.get(this.url)

    const myObserver = {
      next: (data: any) => console.log('Data received:', data),
      error: (err: any) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    }

    users$.subscribe(myObserver);

    users$.subscribe({
      next: (data) => console.log('Data received:', data),
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })

    // users$.subscribe(data => console.log('Data received:', data))

    //  const subscription =  users$.subscribe({
    //      next: (data) => console.log('Data received:', data),
    //   error: (err) => console.error('Request failed:', err),
    //   complete: () => console.log('Request complete')
    //   })

    // subscription.unsubscribe();

  }



}
