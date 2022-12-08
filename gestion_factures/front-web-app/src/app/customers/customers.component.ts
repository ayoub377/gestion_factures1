import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  public customers: any;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8888/customers')
      .subscribe((data) => {
        this.customers = data;
      });
  }
}
