import { ShoppingItem } from './../_models/shopping-item';

import { Action } from '@ngrx/store';

export const ADD_SHOPPING_ITEM = 'ADD_ITEM';
export const REMOVE_SHOPPING_ITEM = 'REMOVE_ITEM';

export class AddShoppingItem implements Action {
    readonly type = ADD_SHOPPING_ITEM;

    constructor(public payload: ShoppingItem) {}
}
export class RemoveShoppingItem implements Action {
    readonly type = REMOVE_SHOPPING_ITEM;

    constructor(public payload: number) {}
}

export type Actions = AddShoppingItem | RemoveShoppingItem;
