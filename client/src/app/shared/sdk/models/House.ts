/* tslint:disable */

declare var Object: any;
export interface HouseInterface {
  "name"?: string;
  "address"?: string;
  "phone"?: string;
  "social_link"?: string;
  "description"?: string;
  "owner_id"?: string;
  "category"?: string;
  "price"?: number;
  "bed"?: number;
  "image"?: string;
  "status"?: string;
  "rating"?: number;
  "views"?: number;
  "reviews"?: number;
  "last_edit"?: string;
  "latitude"?: number;
  "longitude"?: number;
  "happy_time"?: string;
  "owner_name"?: string;
  "id"?: number;
}

export class House implements HouseInterface {
  "name": string;
  "address": string;
  "phone": string;
  "social_link": string;
  "description": string;
  "owner_id": string;
  "category": string;
  "price": number;
  "bed": number;
  "image": string;
  "status": string;
  "rating": number;
  "views": number;
  "reviews": number;
  "last_edit": string;
  "latitude": number;
  "longitude": number;
  "happy_time": string;
  "owner_name": string;
  "id": number;
  constructor(data?: HouseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `House`.
   */
  public static getModelName() {
    return "House";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of House for dynamic purposes.
  **/
  public static factory(data: HouseInterface): House{
    return new House(data);
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
      name: 'House',
      plural: 'Houses',
      path: 'Houses',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: 'FunHouse'
        },
        "address": {
          name: 'address',
          type: 'string',
          default: 'Liên Chiểu, Đà Nẵng'
        },
        "phone": {
          name: 'phone',
          type: 'string',
          default: '(+84)1206145483'
        },
        "social_link": {
          name: 'social_link',
          type: 'string',
          default: 'https://fb.com/anhtuanhnh'
        },
        "description": {
          name: 'description',
          type: 'string',
          default: 'Nhà mới xây, rộng rãi thoáng mát, phù hợp cho người mới ra trường đi làm.'
        },
        "owner_id": {
          name: 'owner_id',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string',
          default: 'Nhà cho thuê'
        },
        "price": {
          name: 'price',
          type: 'number',
          default: 100000
        },
        "bed": {
          name: 'bed',
          type: 'number',
          default: 1
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "rating": {
          name: 'rating',
          type: 'number',
          default: 4
        },
        "views": {
          name: 'views',
          type: 'number',
          default: 100
        },
        "reviews": {
          name: 'reviews',
          type: 'number',
          default: 10
        },
        "last_edit": {
          name: 'last_edit',
          type: 'string'
        },
        "latitude": {
          name: 'latitude',
          type: 'number',
          default: 16.059237
        },
        "longitude": {
          name: 'longitude',
          type: 'number',
          default: 108.22332
        },
        "happy_time": {
          name: 'happy_time',
          type: 'string',
          default: '6:00 - 22:00'
        },
        "owner_name": {
          name: 'owner_name',
          type: 'string',
          default: 'Tuan Hoang'
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
