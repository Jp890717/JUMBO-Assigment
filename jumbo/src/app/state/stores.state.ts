import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Store} from "../models/stores";
import {tap} from "rxjs";
import {StoreService} from "../services/store.service";

export interface StoreStateModel {
  stores: Store[];
}

export class AddStores {
  static readonly type = '[Store] Add Store';
  constructor(public payload: Store[]) {}
}

export class GetStores {
  static readonly type = '[Store] Add Store';
  constructor(public payload: Store[]) {}
}

@State<StoreStateModel>({
  name: 'store',
  defaults: {
    stores: []
  }
})
export class StoreState {

  constructor(private storeService: StoreService) {}

  @Selector()
  static getStores(state: StoreStateModel) {
    return state.stores;
  }

  @Action(GetStores)
  getStores({ getState, setState }: StateContext<StoreStateModel>) {
    return this.storeService.getStores().pipe(
      tap((stores: Store[]) => {
        setState({
          stores
        });
      })
    );
  }

  @Action(AddStores)
  addStores({ getState, patchState }: StateContext<StoreStateModel>, { payload }: AddStores) {
    const stores = getState().stores;
    patchState({
      stores: [...stores, ...payload]
    });
  }

}
