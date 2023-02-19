import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {
  public factures: any;
  customerId!:number;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?projection=fullBill&customerId='+this.customerId)
      .subscribe((data) => {
        this.factures = data;
      });

    }

  getOrderDetails(o:any) {
        this.router.navigateByUrl('/factures-details/'+o.id);
  }

  }

