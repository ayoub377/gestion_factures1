import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products: any;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8888/products')
      .subscribe((data) => {
        this.products = data;
      });
  }

}
