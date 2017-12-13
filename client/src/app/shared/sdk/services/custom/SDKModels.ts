/* tslint:disable */
import { Injectable } from '@angular/core';
import { House } from '../../models/House';
import { Booking } from '../../models/Booking';
import { Rent } from '../../models/Rent';
import { Account } from '../../models/Account';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    House: House,
    Booking: Booking,
    Rent: Rent,
    Account: Account,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
