import { mockedOrdersList } from "./../mocks/order"; // Need to remove this once API is ready
import { 
    FETCH_ORDER_LIST_LOADING,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_ERROR,

    FETCH_ORDER_LINE_ITEMS_LOADING,
    FETCH_ORDER_LINE_ITEMS_SUCCESS,
    FETCH_ORDER_LINE_ITEMS_ERROR,

    RESET_ORDER_LIST_STATE,
} from "./../actions/order";

const initialState = {
    orderList: mockedOrdersList, // Need to remove mockedOrdersList once API is ready: []
    isOrderListLoading: false,
    showLineItemsPanel: false,
    isOrderLineItemsLoading: false,
    orderLineItems: []
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

        case FETCH_ORDER_LINE_ITEMS_LOADING:
            return {
                ...state,
                showLineItemsPanel: true,
                isOrderLineItemsLoading: true
            };

        case FETCH_ORDER_LINE_ITEMS_SUCCESS:
            return {
                ...state,
                showLineItemsPanel: true,
                isOrderLineItemsLoading: false,
                orderLineItems: action.payload
            };

        case FETCH_ORDER_LINE_ITEMS_ERROR:
            return {
                ...state,
                showLineItemsPanel: true,
                isOrderLineItemsLoading: false
            };

        case RESET_ORDER_LIST_STATE:
            return initialState;
    
        default:
            return state;
    }
}