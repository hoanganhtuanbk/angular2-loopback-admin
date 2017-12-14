import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { House, AccessToken }  from '../../../shared/sdk/models';
import { HouseApi } from '../../../shared/sdk/services';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-house-add',
  templateUrl: './house-add.component.html',
  styleUrls: ['./house-add.component.css']
})
export class HouseAddComponent implements OnInit {

  house: Object = {};
  rForm: FormGroup;

  titleAlert:string = 'This field is required';
  constructor(
    private houseApi   : HouseApi,
    private fb: FormBuilder,
    private _location: Location,
    private router: Router,
  ) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'description': [null, Validators.required],
      'price': [null, Validators.required],
      'bed': [null, Validators.required],
      'category': [null, Validators.required],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }
  addHouse(data): void {
    this.houseApi.create(data

    ).subscribe((res) => {
           console.log(res);
      this.router.navigate(['/houses/list']);
      // this.houseApi.onCreateMessages(this.house.id)
      //   .subscribe((house: House) => this.house.messages.push(message))
    });
  }
  goBack() {
    this._location.back();
  }
}
