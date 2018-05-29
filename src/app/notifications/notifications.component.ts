import { ShoppingItem } from './../_models/shopping-item';
import { Observable } from 'rxjs';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  items$: Observable<ShoppingItem[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select('items');
  }

  ngOnInit() {
  }

}
