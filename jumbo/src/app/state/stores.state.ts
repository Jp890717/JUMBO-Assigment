import { State, Action, StateContext, Selector } from '@ngxs/store';
import {StoreList} from "../models/stores";
import {tap} from "rxjs";
import {StoreService} from "../services/store.service";

export interface StoreStateModel {
  stores: StoreList[];
}

export class AddStores {
  static readonly type = '[Store] Add Store';
  constructor(public payload: StoreList[]) {}
}

@State<StoreStateModel>({
  name: 'store',
  defaults: {
    stores: []
  }
})
export class StoreState {

  constructor() {}

  @Selector()
  static getStores(state: StoreStateModel) {
    return state.stores;
  }

  @Action(AddStores)
  addStores({ getState, patchState }: StateContext<StoreStateModel>, { payload }: AddStores) {
    const stores = getState().stores;
    patchState({
      stores: [...stores, ...payload]
    });
  }

}
