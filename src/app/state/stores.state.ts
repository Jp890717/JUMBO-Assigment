import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Cities, StoreList} from "../models/stores";
import {Injectable} from "@angular/core";

export class AddStores {
  static readonly type = '[StoreList] Add';
  constructor(public payload: StoreList[]) {}
}

export class AddCity {
  static readonly type = '[City] Add';
  constructor(public payload: string) {}
}

export interface StoreStateModel {
  stores: StoreList[];
}

export interface CityStateModel {
  city: string;
}

@State<StoreStateModel>({
  name: 'store',
})

@State<CityStateModel>({
  name: 'city',
})

@Injectable()

export class StoreState {

  @Selector()
  static getStores(state: StoreStateModel) {
    return state.stores;
  }

  @Selector()
  static getCity(state: CityStateModel) {
    return state.city;
  }

  @Action(AddStores)
  addStores({ getState, patchState }: StateContext<StoreStateModel>, { payload }: AddStores) {
    const state = getState();
    patchState({
      ...state,
      stores: payload
    });
  }

  @Action(AddCity)
  addCity({ getState, patchState }: StateContext<CityStateModel>, { payload }: AddCity) {
    const state = getState();
    patchState({
      ...state,
      city: payload
    });
  }

}
