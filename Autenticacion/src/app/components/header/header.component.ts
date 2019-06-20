import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private aut:AuthService) {
    aut.handleAuthentication();
   }

  ngOnInit() {
  }
  login(){
    this.aut.login();
  }
  out(){
    this.aut.logout();
  }

}
