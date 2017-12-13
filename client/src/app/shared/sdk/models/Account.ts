/* tslint:disable */

declare var Object: any;
export interface AccountInterface {
  "realm"?: string;
  "username"?: string;
  "email"?: string;
  "challenges"?: any;
  "emailVerified"?: boolean;
  "status"?: string;
  "created"?: Date;
  "lastUpdated"?: Date;
  "id"?: number;
  "password"?: string;
  accessTokens?: any[];
}

export class Account implements AccountInterface {
  "realm": string;
  "username": string;
  "email": string;
  "challenges": any;
  "emailVerified": boolean;
  "status": string;
  "created": Date;
  "lastUpdated": Date;
  "id": number;
  "password": string;
  accessTokens: any[];
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
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
      name: 'Account',
      plural: 'Accounts',
      path: 'Accounts',
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
        "email": {
          name: 'email',
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
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
