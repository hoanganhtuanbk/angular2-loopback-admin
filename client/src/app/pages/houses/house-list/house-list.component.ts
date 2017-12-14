import { Component, OnInit } from '@angular/core';
import { House, AccessToken }  from '../../../shared/sdk/models';
import { HouseApi }            from '../../../shared/sdk/services';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: Array<Object> = [];

  constructor(private houseApi   : HouseApi) { }

  ngOnInit() {
    this.getHouse()
  }
  getHouse(): void {
    this.houseApi.find({

    }).subscribe((houses: Array<Object>) => {
      this.houses = houses;
      console.log(houses)
      // this.houseApi.onCreateMessages(this.house.id)
      //   .subscribe((house: House) => this.house.messages.push(message))
    });
  }
}
