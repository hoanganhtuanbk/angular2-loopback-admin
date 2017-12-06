import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/index';
import { House, AccessToken }  from './shared/sdk/models';
import { HouseApi }            from './shared/sdk/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

}
