import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-factures',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})

export class OrdersDetailsComponent implements OnInit{

  public orderDetails: any;
  orderId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId = route.snapshot.params['facturesId'];
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/BILLING-SERVICE/fullBill/'+this.orderId)
      .subscribe((data) => {
        this.orderDetails = data;
      });
  }

  sendOrderDetails(orderDetails:any){
    this.http.post('http://localhost:8888/BILLING-SERVICE/fullBill/{id}/exportPdf',orderDetails)
  }

}
