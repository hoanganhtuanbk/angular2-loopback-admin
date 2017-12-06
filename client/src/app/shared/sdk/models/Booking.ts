/* tslint:disable */

declare var Object: any;
export interface BookingInterface {
  "id"?: number;
}

export class Booking implements BookingInterface {
  "id": number;
  constructor(data?: BookingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Booking`.
   */
  public static getModelName() {
    return "Booking";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Booking for dynamic purposes.
  **/
  public static factory(data: BookingInterface): Booking{
    return new Booking(data);
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
      name: 'Booking',
      plural: 'Bookings',
      path: 'Bookings',
      idName: 'id',
      properties: {
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
