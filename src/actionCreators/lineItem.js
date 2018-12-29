import { 
    FETCH_MASTER_LINE_ITEMS_LOADING,
    FETCH_MASTER_LINE_ITEMS_SUCCESS,
    FETCH_MASTER_LINE_ITEMS_ERROR,

    FETCH_MORE_MASTER_LINE_ITEMS_LOADING,
    FETCH_MORE_MASTER_LINE_ITEMS_SUCCESS,
    FETCH_MORE_MASTER_LINE_ITEMS_ERROR,
} from "./../actions/lineItem";

import { fetchMasterLineItemsAPI } from './../apis/lineItem';

const fetchMasterLineItemsLoading = () => ({
    type: FETCH_MASTER_LINE_ITEMS_LOADING
});

const fetchMasterLineItemsSuccess = ( masterLineItemsResponse ) => ({
    type: FETCH_MASTER_LINE_ITEMS_SUCCESS,
    payload: masterLineItemsResponse
});

const fetchMasterLineItemsError = () => ({
    type: FETCH_MASTER_LINE_ITEMS_ERROR
});

export const fetchMasterLineItems = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchMasterLineItemsLoading() );
        
        return fetchMasterLineItemsAPI( reqData )
        .then( response => {
            dispatch(fetchMasterLineItemsSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchMasterLineItemsError());
        });
    });
}

const fetchMoreMasterLineItemsLoading = () => ({
    type: FETCH_MORE_MASTER_LINE_ITEMS_LOADING
});

const fetchMoreMasterLineItemsSuccess = ( masterLineItemsResponse ) => ({
    type: FETCH_MORE_MASTER_LINE_ITEMS_SUCCESS,
    payload: masterLineItemsResponse
});

const fetchMoreMasterLineItemsError = () => ({
    type: FETCH_MORE_MASTER_LINE_ITEMS_ERROR
});

export const fetchMoreMasterLineItems = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchMoreMasterLineItemsLoading() );
        
        return fetchMasterLineItemsAPI( reqData )
        .then( response => {
            dispatch(fetchMoreMasterLineItemsSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchMoreMasterLineItemsError());
        });
    });
}