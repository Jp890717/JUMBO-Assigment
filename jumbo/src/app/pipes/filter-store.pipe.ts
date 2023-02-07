import { Pipe, PipeTransform } from '@angular/core';
import {StoreList} from "../models/stores";

@Pipe({
  name: 'filterStore'
})
export class FilterStorePipe implements PipeTransform {
  transform(storeList: StoreList[], searchString: string): any[] {
    if (!searchString) {
      return storeList;
    }

    return storeList.filter(item => item.addressName.toLowerCase().includes(searchString.toLowerCase())
      || item.city.toLowerCase().includes(searchString.toLowerCase()));
  }
}
