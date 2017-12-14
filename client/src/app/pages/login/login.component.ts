import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SDKToken, AccountApi } from '../../shared/sdk';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private state: string = 'login';

  constructor(
    private userApi: AccountApi,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {}

  setState(state: string) {
    this.state = state;
  }

  login(username, password) {
    this.userApi.login({ username: username.value, password: password.value })
      .subscribe((token: SDKToken) => {
      console.log(token)
        this.authService.setUser(token);
        this.router.navigate(['/']);
      }, err => {
        alert(err && err.message ? err.message : 'Login failed!');
        password.value = '';
      });
  }

  signup(username, email, password, passwordConfirm, type) {
    if(password.value !== passwordConfirm.value) {
      return alert('Passwords must match!');
    }

    this.userApi.create({
      username: username.value,
      email: email.value,
      password: password.value,
      type: type.value
    }).subscribe((res) => {
      console.log('created.', res);
      // if(res.id) {
      //   this.login(email, password);
      // }
    });
  }

  resetPassword(email) {
    this.userApi.resetPassword({
      email: email.value
    }).subscribe((res) => {
      console.log('Restted!', res);
    })
  }

}
