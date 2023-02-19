import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements  OnInit{
  public customers: any;
  constructor(private http:HttpClient, private router:Router) {}

  ngOnInit() {
    this.http.get('http://localhost:8888/CUSTOMER-SERVICE/customers')
      .subscribe((data) => {
        this.customers = data;
      });

  }

  getOrders(c:any){
    this.router.navigateByUrl('factures/'+c.id);

  }


}
