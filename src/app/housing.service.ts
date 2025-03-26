import { Injectable } from '@angular/core';
import { getHousingLocationList } from './housingdata';
import { HousingLocation } from './housinglocation';


@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  protected housingLocationList = getHousingLocationList(this.baseUrl);

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
