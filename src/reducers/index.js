import { combineReducers } from 'redux';
import { headerReducer as header } from './header';
import { orderReducer as order } from './order';

export default combineReducers({
    header,
    order
});