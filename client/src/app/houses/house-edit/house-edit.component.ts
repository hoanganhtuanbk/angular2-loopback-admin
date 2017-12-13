import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { House, AccessToken }  from '../../shared/sdk/models';
import { HouseApi }            from '../../shared/sdk/services';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  id: number;
  private sub: any;
  house: object;

  rForm: FormGroup;
  titleAlert:string = 'This field is required';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private fb: FormBuilder,
    private houseApi   : HouseApi,
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
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.houseApi.findById(params['id']).subscribe((res: {address: string,name: string,price:string,description: string,bed: string,category: string}) => {
        console.log(res);
        this.rForm = this.fb.group({
          'name': [res.name, Validators.required],
          'address': [res.address, Validators.required],
          'description': [res.description, Validators.required],
          'price': [res.price, Validators.required],
          'bed': [res.bed, Validators.required],
          'category': [res.category, Validators.required],
          'validate' : ''
        });
        // this.houseApi.onCreateMessages(this.house.id)
        //   .subscribe((house: House) => this.house.messages.push(message))
      });
      // In a real app: dispatch action to load the details here.
    });
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
  editHouse(data): void {
    this.houseApi.updateAttributes(this.id,data

    ).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/houses/list']);
      // this.houseApi.onCreateMessages(this.house.id)
      //   .subscribe((house: House) => this.house.messages.push(message))
    });
  }
  goBack() {
    this._location.back();
  }


}
