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

    ADD_ORDER_LINE_ITEM_LOADING,
    ADD_ORDER_LINE_ITEM_SUCCESS,
    ADD_ORDER_LINE_ITEM_ERROR,

    DELETE_ORDER_LINE_ITEM_LOADING,
    DELETE_ORDER_LINE_ITEM_SUCCESS,
    DELETE_ORDER_LINE_ITEM_ERROR,

    UPDATE_ORDER_LINE_ITEM_LOADING,
    UPDATE_ORDER_LINE_ITEM_SUCCESS,
    UPDATE_ORDER_LINE_ITEM_ERROR,

    CHANGE_CURRENT_ORDERS_SORTING,

    SET_CURRENT_SELECTED_ORDER_ID,

    HIDE_ORDER_LINE_ITEMS_STATE,

    RESET_ORDER_LIST_STATE
} from './../actions/order';

import {
    fetchOrderListAPI,
    fetchOrderLineItemsAPI,
    addOrderLineItemAPI,
    deleteOrderLineItemAPI,
    updateOrderLineItemAPI
} from './../apis/order';

import { DEFAULT_PAGE_SIZE } from './../constants';

const fetchOrderListLoading = () => ({
    type: FETCH_ORDER_LIST_LOADING
});

const fetchOrderListSuccess = ( orderListResponse ) => ({
    type: FETCH_ORDER_LIST_SUCCESS,
    payload: {
        orderList: orderListResponse.orders,
        totalRecords: orderListResponse.totalRecords
    }
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

const fetchMoreOrderListLoading = () => ({
    type: FETCH_MORE_ORDER_LIST_LOADING
});

const fetchMoreOrderListSuccess = ( orderListResponse ) => ({
    type: FETCH_MORE_ORDER_LIST_SUCCESS,
    payload: {
        orderList: orderListResponse.orders,
        totalRecords: orderListResponse.totalRecords
    }
});

const fetchMoreOrderListError = () => ({
    type: FETCH_MORE_ORDER_LIST_ERROR
});

export const fetchMoreOrderList = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchMoreOrderListLoading() );
        
        return fetchOrderListAPI( reqData )
        .then( response => {
            dispatch(fetchMoreOrderListSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchMoreOrderListError());
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

const updateOrderLineItemLoading = ( itemId ) => ({
    type: UPDATE_ORDER_LINE_ITEM_LOADING,
    payload: itemId
});

const updateOrderLineItemSuccess = ( updatedLineItem ) => ({
    type: UPDATE_ORDER_LINE_ITEM_SUCCESS,
    payload: updatedLineItem
});

const updateOrderLineItemError = ( itemId ) => ({
    type: UPDATE_ORDER_LINE_ITEM_ERROR,
    payload: itemId
});

export const updateOrderLineItem = ( reqData ) => {
    return ( dispatch => {
        dispatch( updateOrderLineItemLoading( reqData.orderLineItemId ));
        return updateOrderLineItemAPI( reqData )
        .then( response => {
            dispatch( updateOrderLineItemSuccess( response.data ) );
        })
        .catch( error => {
            dispatch( updateOrderLineItemError( reqData.orderLineItemId ) );
        });
    });
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
            dispatch( deleteOrderLineItemSuccess( response.data ));
        })
        .catch( error => {
            dispatch( deleteOrderLineItemError( reqData.orderLineItemId ));
        });
    });
};

const changeCurrentOrdersSorting = (selectedOption) => ({
    type: CHANGE_CURRENT_ORDERS_SORTING,
    payload: selectedOption
});

export const changeOrdersSorting = ( selectedOption ) => {
    return ((dispatch, getState) => {
        dispatch( changeCurrentOrdersSorting(selectedOption) );

        const customerId = getState().header.customerId;
        if ( customerId ) {
            const orderReqObj = {
                customerId: customerId,
                sortBy: selectedOption.value,
                page: 0,
                count: DEFAULT_PAGE_SIZE
            };
    
            dispatch( fetchOrderList( orderReqObj ));
        }
    });
}

export const hideOrderLineItems = () => ({
    type: HIDE_ORDER_LINE_ITEMS_STATE
});

export const resetOrderListState = () => ({
    type: RESET_ORDER_LIST_STATE
});