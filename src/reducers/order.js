import { mockedOrdersList } from "./../mocks/order"; // Need to remove this once API is ready
import { 
    FETCH_ORDER_LIST_LOADING,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_ERROR,

    RESET_ORDER_LIST_STATE
} from "./../actions/order";

const initialState = {
    orderList: mockedOrdersList, // Need to remove mockedOrdersList once API is ready: []
    isOrderListLoading: false
};

export const orderReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ORDER_LIST_LOADING:
            return {
                ...state,
                isOrderListLoading: true
            };

        case FETCH_ORDER_LIST_SUCCESS:
            return {
                ...state,
                isOrderListLoading: false,
                orderList: action.payload.orderList
            };

        case FETCH_ORDER_LIST_ERROR:
            return {
                ...state,
                isOrderListLoading: false
            };

        case RESET_ORDER_LIST_STATE:
            return initialState;
    
        default:
            return state;
    }
}