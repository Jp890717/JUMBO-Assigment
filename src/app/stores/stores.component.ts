import {AfterContentInit, Component, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";
import {AddStores} from "../state/stores.state";
import {Cities, StoreList} from "../models/stores";
import {Subject} from "rxjs";
import {Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit, AfterContentInit {

  inputSubject = new Subject<string>();
  storeList: StoreList[] = [];
  cityList: Cities[] = [];
  loading: boolean = true;
  showStores: boolean = true;
  showCities: boolean = false;
  searchString: string = '';
  errorMessage: string = '';

  constructor(private storeService: StoreService, private store: Store, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getStores();
    this.router.navigate([], { queryParams: {} });
  }

  ngAfterContentInit (){
    const params = this.activatedRoute.snapshot.queryParams;

    this.activatedRoute.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.showCities = params['showCities'] === 'true';
        this.showStores = params['showStores'] !== 'false';
      }
    })
  }

  private getStores() {
    this.loading = true;

    this.storeService.getStores().subscribe({
      next: (res:StoreList[]) => {
        this.store.dispatch(new AddStores(res));
        this.storeList = res;

        // Removing duplicates from cityList and filtering out stores where city in empty string
        this.cityList = [...new Set(this.storeList.map(city => city.city).filter(city => city !== ''))].map(city => ({ city }));
      },
      error: (error) => {
        this.errorMessage = 'Store data could not be retrieved at this moment'
        this.loading = false
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  onInput(event: any) {
    this.searchString = event.target.value;
  }

}
