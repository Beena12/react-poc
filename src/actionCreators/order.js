import { 
    FETCH_ORDER_LIST_LOADING,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_ERROR,

    FETCH_ORDER_LINE_ITEMS_LOADING,
    FETCH_ORDER_LINE_ITEMS_SUCCESS,
    FETCH_ORDER_LINE_ITEMS_ERROR,

    ADD_ORDER_LINE_ITEM_LOADING,
    ADD_ORDER_LINE_ITEM_SUCCESS,
    ADD_ORDER_LINE_ITEM_ERROR,

    DELETE_ORDER_LINE_ITEM_LOADING,
    DELETE_ORDER_LINE_ITEM_SUCCESS,
    DELETE_ORDER_LINE_ITEM_ERROR,

    SET_CURRENT_SELECTED_ORDER_ID,

    HIDE_ORDER_LINE_ITEMS_STATE,

    RESET_ORDER_LIST_STATE
} from './../actions/order';

import {
    fetchOrderListAPI,
    fetchOrderLineItemsAPI,
    addOrderLineItemAPI,
    deleteOrderLineItemAPI
} from './../apis/order';

const fetchOrderListLoading = () => ({
    type: FETCH_ORDER_LIST_LOADING
});

const fetchOrderListSuccess = ( orderList ) => ({
    type: FETCH_ORDER_LIST_SUCCESS,
    payload: orderList
});

const fetchOrderListError = () => ({
    type: FETCH_ORDER_LIST_ERROR
});

export const fetchOrderList = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchOrderListLoading() );
        
        return fetchOrderListAPI( reqData )
        .then( response => {
            dispatch(fetchOrderListSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchOrderListError());
        });
    });
}

const setCurrentSelectedOrderId = ( orderId ) => ({
    type: SET_CURRENT_SELECTED_ORDER_ID,
    payload: orderId
})

const fetchOrderLineItemsLoading = () => ({
    type: FETCH_ORDER_LINE_ITEMS_LOADING
});

const fetchOrderLineItemsSuccess = ( orderDetails ) => ({
    type: FETCH_ORDER_LINE_ITEMS_SUCCESS,
    payload: orderDetails.orderItems
});

const fetchOrderLineItemsError = () => ({
    type: FETCH_ORDER_LINE_ITEMS_ERROR
});

export const fetchOrderLineItems = ( data ) => {
    return ( dispatch => {
        dispatch( fetchOrderLineItemsLoading() );
        
        return fetchOrderLineItemsAPI( data )
        .then( response => {
            dispatch( setCurrentSelectedOrderId(response.data._id) );
            dispatch(fetchOrderLineItemsSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchOrderLineItemsError());
        });
    });
}

const addOrderLineItemLoading = () => ({
    type: ADD_ORDER_LINE_ITEM_LOADING
});

const addOrderLineItemSuccess = ( data ) => ({
    type: ADD_ORDER_LINE_ITEM_SUCCESS
});

const addOrderLineItemError = () => ({
    type: ADD_ORDER_LINE_ITEM_ERROR
});

export const addOrderLineItem = ( data ) => {
    return ( dispatch => {
        dispatch( addOrderLineItemLoading() );
        return addOrderLineItemAPI( data )
        .then( response => {
            dispatch( addOrderLineItemSuccess( response ));
            dispatch( fetchOrderLineItems( data.orderId ) );
        })
        .catch( error => {
            dispatch( addOrderLineItemError());
        });
    });
}

export const updateOrderLineItem = ( reqData ) => {
    
};

const deleteOrderLineItemLoading = ( itemId ) => ({
    type: DELETE_ORDER_LINE_ITEM_LOADING,
    payload: itemId
});

const deleteOrderLineItemSuccess = ( response ) => ({
    type: DELETE_ORDER_LINE_ITEM_SUCCESS,
    payload: response
});

const deleteOrderLineItemError = ( itemId ) => ({
    type: DELETE_ORDER_LINE_ITEM_ERROR,
    payload: itemId
});

export const deleteOrderLineItem = ( reqData ) => {
    return ( dispatch => {
        dispatch( deleteOrderLineItemLoading( reqData.orderLineItemId ) );
        return deleteOrderLineItemAPI( reqData )
        .then( response  => {
            dispatch( deleteOrderLineItemSuccess( response ));
        })
        .catch( error => {
            dispatch( deleteOrderLineItemError( reqData.orderLineItemId ));
        });
    });
};

export const hideOrderLineItems = () => ({
    type: HIDE_ORDER_LINE_ITEMS_STATE
});

export const resetOrderListState = () => ({
    type: RESET_ORDER_LIST_STATE
});