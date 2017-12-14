import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { House, AccessToken }  from '../../../shared/sdk/models';
import { HouseApi }            from '../../../shared/sdk/services';
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  id: number;
  private sub: any;
  house: object;


  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private houseApi   : HouseApi,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.houseApi.findById(params['id']).subscribe((res) => {
        console.log(res);
        this.house = res;
        // this.houseApi.onCreateMessages(this.house.id)
        //   .subscribe((house: House) => this.house.messages.push(message))
      });
      // In a real app: dispatch action to load the details here.
    });
  }
  goBack() {
    this._location.back();
  }
}
