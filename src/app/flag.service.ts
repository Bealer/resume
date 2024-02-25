import { Injectable } from '@angular/core';
import { initialize,
  VariationValue} from '@harnessio/ff-javascript-client-sdk';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor() { }
  target = {
    identifier: 'Ian',
    name: 'Ian'
  }
  
  _client = initialize('5709fbfc-dac0-49db-ac0f-e6429bc657f9', this.target)
  public get client() { return this._client }
  
  Flag(key:string, defaultValue: any) : VariationValue {
    return this.client.variation(key, defaultValue);
  }

  FlagValue<T>(key:string, defaultValue: T) : T{
    return this.client.variation(key, defaultValue)?.valueOf() as T ?? defaultValue;
  }
}
