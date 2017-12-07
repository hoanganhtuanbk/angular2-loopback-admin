/* tslint:disable */

declare var Object: any;
export interface RentInterface {
  "houseId"?: string;
  "userId"?: string;
  "note"?: string;
  "start_time"?: string;
  "end_time"?: string;
  "id"?: number;
}

export class Rent implements RentInterface {
  "houseId": string;
  "userId": string;
  "note": string;
  "start_time": string;
  "end_time": string;
  "id": number;
  constructor(data?: RentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rent`.
   */
  public static getModelName() {
    return "Rent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rent for dynamic purposes.
  **/
  public static factory(data: RentInterface): Rent{
    return new Rent(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Rent',
      plural: 'Rents',
      path: 'Rents',
      idName: 'id',
      properties: {
        "houseId": {
          name: 'houseId',
          type: 'string'
        },
        "userId": {
          name: 'userId',
          type: 'string'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "start_time": {
          name: 'start_time',
          type: 'string'
        },
        "end_time": {
          name: 'end_time',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
