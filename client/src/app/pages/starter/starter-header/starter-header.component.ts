import { Component, OnInit } from '@angular/core';
import { AccountApi } from '../../../shared/sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {
  isLogin: boolean = false;

  constructor(
    private router: Router,
    private userApi: AccountApi) {

    // this.router.events.subscribe((route: any) => {
    //   this.isLogin = route.url.match('/login') !== null ||
    //     route.url.match('/reset') !== null;
    // });
  }


  ngOnInit() {
  }
  logout() {
    this.userApi.logout().subscribe((response) => {
      console.log(response);
      window.location.href = "/login"
    });
  }
}
