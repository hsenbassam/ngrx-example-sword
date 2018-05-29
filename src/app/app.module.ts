import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingItemReducer } from './_store/shopping-item.reducer';
import { ReadItemsComponent } from './read-items/read-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadItemsComponent,
    AddItemComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      items: shoppingItemReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
