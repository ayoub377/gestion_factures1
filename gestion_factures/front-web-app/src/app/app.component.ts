import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public securityService:KeycloakSecurityService) {
  }
  title = 'front-web-app';
  ngOnInit(){

  }

  onLogout() {
    this.securityService.kc.logout({redirectUri:'http://auth-server/realms/wallet-realm/protocol/openid-connect/logout'});
  }
}
