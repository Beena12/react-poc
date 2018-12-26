// import { mockedOrdersList } from "./../mocks/order"; // Need to remove this once API is ready
import { 
    FETCH_ORDER_LIST_LOADING,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_ERROR,

    FETCH_MORE_ORDER_LIST_LOADING,
    FETCH_MORE_ORDER_LIST_SUCCESS,
    FETCH_MORE_ORDER_LIST_ERROR,

    FETCH_ORDER_LINE_ITEMS_LOADING,
    FETCH_ORDER_LINE_ITEMS_SUCCESS,
    FETCH_ORDER_LINE_ITEMS_ERROR,

    DELETE_ORDER_LINE_ITEM_LOADING,
    DELETE_ORDER_LINE_ITEM_SUCCESS,
    DELETE_ORDER_LINE_ITEM_ERROR,

    UPDATE_ORDER_LINE_ITEM_LOADING,
    UPDATE_ORDER_LINE_ITEM_SUCCESS,
    UPDATE_ORDER_LINE_ITEM_ERROR,

    CHANGE_CURRENT_ORDERS_SORTING,

    ADD_ORDER_LINE_ITEM_SUCCESS,

    SET_CURRENT_SELECTED_ORDER_ID,

    HIDE_ORDER_LINE_ITEMS_STATE,

    RESET_ORDER_LIST_STATE,
} from "./../actions/order";

import { sortingOptions } from './../components/Orders/OrdersTable/staticData';

const initialState = {
    orderList:  [],
    totalRowCount: 0,
    isOrderListLoading: false,
    currentSelectedOrderId: null,
    
    showLineItemsPanel: false,
    
    showOrderLineItems: false,
    isOrderLineItemsLoading: false,
    orderLineItems: [],

    currentOrderBy: sortingOptions[0]
};

export const orderReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ORDER_LIST_LOADING:
            return {
                ...state,
                isOrderListLoading: true,
                showLineItemsPanel: false
            };

        case FETCH_ORDER_LIST_SUCCESS:
            return {
                ...state,
                isOrderListLoading: false,
                orderList: action.payload.orderList,  
                totalRowCount: action.payload.totalRecords,              
                currentSelectedOrderId: null
            };

        case FETCH_ORDER_LIST_ERROR:
            return {
                ...state,
                isOrderListLoading: false
            };

        case FETCH_MORE_ORDER_LIST_SUCCESS:
            const newOrderList = [...state.orderList, ...action.payload.orderList ];
            return {
                ...state,
                orderList: newOrderList,  
                totalRowCount: action.payload.totalRecords,
            };

        case FETCH_ORDER_LINE_ITEMS_LOADING:
            return {
                ...state,
                showLineItemsPanel: true,
                showOrderLineItems: true,
                isOrderLineItemsLoading: true
            };

        case FETCH_ORDER_LINE_ITEMS_SUCCESS:
            return {
                ...state,
                showLineItemsPanel: true,
                showOrderLineItems: true,
                isOrderLineItemsLoading: false,
                orderLineItems: action.payload
            };

        case FETCH_ORDER_LINE_ITEMS_ERROR:
            return {
                ...state,
                showLineItemsPanel: true,
                showOrderLineItems: true,
                isOrderLineItemsLoading: false
            };

        case DELETE_ORDER_LINE_ITEM_LOADING:
            return {
                ...state,
                orderLineItems: state.orderLineItems.map( lineItem => {
                    if( lineItem._id === action.payload ) {
                        lineItem = {
                            ...lineItem,
                            isDeleteInProgress: true
                        };
                    }
                    return lineItem;
                })
            }

        case DELETE_ORDER_LINE_ITEM_SUCCESS:
            const deleteOrderItemId = action.payload.deleteOrderItemId;
            return {
                ...state,
                orderLineItems: state.orderLineItems.filter( lineItem => lineItem._id !== deleteOrderItemId )
            };

        case DELETE_ORDER_LINE_ITEM_ERROR:
            return {
                ...state,
                orderLineItems: state.orderLineItems.map( lineItem => {
                    if( lineItem._id === action.payload ) {
                        lineItem = {
                            ...lineItem,
                            isDeleteInProgress: false
                        };
                    }
                    return lineItem;
                })
            };

        case UPDATE_ORDER_LINE_ITEM_LOADING:
            return {
                ...state,
                orderLineItems: state.orderLineItems.map( lineItem => {
                    if( lineItem._id === action.payload ) {
                        lineItem = {
                            ...lineItem,
                            isUpdateInProgress: true
                        };
                    }
                    return lineItem;
                })
            };

        case UPDATE_ORDER_LINE_ITEM_SUCCESS:
            return {
                ...state,
                orderLineItems: state.orderLineItems.map( lineItem => {
                    if( lineItem._id === action.payload._id ) {
                        lineItem = action.payload
                    }
                    return lineItem;
                })
            }

        case UPDATE_ORDER_LINE_ITEM_ERROR:
            return {
                ...state,
                orderLineItems: state.orderLineItems.map( lineItem => {
                    if( lineItem._id === action.payload ) {
                        lineItem = {
                            ...lineItem,
                            isUpdateInProgress: false
                        };
                    }
                    return lineItem;
                })
            }

        case ADD_ORDER_LINE_ITEM_SUCCESS:
            return {
                ...state
            };

        case CHANGE_CURRENT_ORDERS_SORTING:
            return {
                ...state,
                currentOrderBy: action.payload
            };

        case SET_CURRENT_SELECTED_ORDER_ID:
            return {
                ...state,
                currentSelectedOrderId: action.payload 
            };

        case HIDE_ORDER_LINE_ITEMS_STATE:
            return {
                ...state,
                showOrderLineItems: false
            };

        case RESET_ORDER_LIST_STATE:
            return initialState;
    
        default:
            return state;
    }
}