/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  "realm"?: string;
  "username"?: string;
  "challenges"?: any;
  "email": string;
  "emailVerified"?: boolean;
  "status"?: string;
  "created"?: Date;
  "lastUpdated"?: Date;
  "id"?: number;
  "password"?: string;
}

export class User implements UserInterface {
  "realm": string;
  "username": string;
  "challenges": any;
  "email": string;
  "emailVerified": boolean;
  "status": string;
  "created": Date;
  "lastUpdated": Date;
  "id": number;
  "password": string;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'Users',
      path: 'Users',
      idName: 'id',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "credentials": {
          name: 'credentials',
          type: 'any'
        },
        "challenges": {
          name: 'challenges',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "lastUpdated": {
          name: 'lastUpdated',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
