import { Pipe, PipeTransform } from '@angular/core';
import {Cities} from "../models/stores";

@Pipe({
  name: 'filterCities'
})
export class FilterCitiesPipe implements PipeTransform {
  transform(cityList: Cities[], searchString: string): any[] {
    if (!searchString) {
      return cityList;
    }

    return [...new Set(cityList.map(city => city.city).filter(item => item.toLowerCase().includes(searchString.toLowerCase())))].map(city => ({city}));
  }
}
