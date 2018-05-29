import * as ShoppingItemActions from './shopping-item.action';
import { ShoppingItem } from '../_models/shopping-item';


const initialState: ShoppingItem = {
    id: 0,
    name: 'Initial Shopping Item'
};

export function reducer(state: ShoppingItem[] = [initialState], action: ShoppingItemActions.Actions) {

    switch (action.type) {
        case ShoppingItemActions.ADD_SHOPPING_ITEM:
            return [...state, action.payload];
        case ShoppingItemActions.REMOVE_SHOPPING_ITEM:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }

}
