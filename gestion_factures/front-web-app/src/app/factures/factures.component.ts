import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {
  public factures: any;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8888/factures')
      .subscribe((data) => {
        this.factures = data;
      });
  }
}
