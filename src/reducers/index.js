import { combineReducers } from 'redux';
import { headerReducer as header } from './header';
import { orderReducer as order } from './order';
import { lineItemReducer as lineItem } from "./lineItem";

export default combineReducers({
    header,
    order,
    lineItem
});