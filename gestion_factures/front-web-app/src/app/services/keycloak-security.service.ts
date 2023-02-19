import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Keycloak from "keycloak-js";



@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {


  constructor(public http:HttpClient) { }

  public kc:Keycloak;

  public async init(){
    console.log("initialization");

   this.kc = new Keycloak({
      url:"http://localhost:8080",
      realm:"wallet-realm",
      clientId:"Angular-app",
    });
    await this.kc.init({
     onLoad:"check-sso"
   })

  }

}
