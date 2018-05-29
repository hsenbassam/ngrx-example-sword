import { ShoppingItem } from './../_models/shopping-item';
import * as ShoppingItemActions from './../_store/shopping-item.action';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addItem(id, name, price?) {
    const addeditem: ShoppingItem = {
      id: id.value,
      name: name.value,
      price: price.value
    };

    this.store.dispatch(new ShoppingItemActions.AddShoppingItem(addeditem));

  }

}
