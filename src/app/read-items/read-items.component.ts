import { AppState } from './../app.state';
import { ShoppingItem } from './../_models/shopping-item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingItemActions from './../_store/shopping-item.action';

@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
  styleUrls: ['./read-items.component.css']
})
export class ReadItemsComponent implements OnInit {

  items$: Observable<ShoppingItem[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = store.select('items');
  }

  ngOnInit() {
  }

  removeItem(index) {
    this.store.dispatch(new ShoppingItemActions.RemoveShoppingItem(index));
  }

}
