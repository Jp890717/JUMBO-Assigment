import {Component, Input, OnInit} from '@angular/core';
import {Cities, StoreList} from "../../models/stores";
import {Store} from "@ngxs/store";
import {AddCity} from "../../state/stores.state";
import {Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() stores: StoreList[] = [];
  @Input() cities: Cities[] = [];
  @Input() searchString: string = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  showStores(city: string){
    this.store.dispatch(new AddCity(city));
    this.router.navigate(['/cities'])
  }

}
