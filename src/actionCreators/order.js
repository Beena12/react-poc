import { 
    FETCH_ORDER_LIST_LOADING,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_ERROR,

    FETCH_ORDER_LINE_ITEMS_LOADING,
    FETCH_ORDER_LINE_ITEMS_SUCCESS,
    FETCH_ORDER_LINE_ITEMS_ERROR,

    RESET_ORDER_LIST_STATE
} from './../actions/order';

import {
    fetchOrderListAPI,
    fetchOrderLineItemsAPI
} from './../apis/order';

const fetchOrderListLoading = () => ({
    type: FETCH_ORDER_LIST_LOADING
});

const fetchOrderListSuccess = ( response ) => ({
    type: FETCH_ORDER_LIST_SUCCESS,
    payload: response
});

const fetchOrderListError = () => ({
    type: FETCH_ORDER_LIST_ERROR
});

export const fetchOrderList = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchOrderListLoading() );
        
        return fetchOrderListAPI( reqData )
        .then( response => {
            fetchOrderListSuccess( response );
        })
        .catch( error => {
            fetchOrderListError();
        });
    });
}

const fetchOrderLineItemsLoading = () => ({
    type: FETCH_ORDER_LINE_ITEMS_LOADING
});

export const fetchOrderLineItems = () => {
    return ( dispatch => {
        dispatch( fetchOrderLineItemsLoading() );
        // ToDo - API call
    });
}

export const resetOrderListState = () => ({
    type: RESET_ORDER_LIST_STATE
});