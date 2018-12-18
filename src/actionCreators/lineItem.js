import { 
    FETCH_ALL_LINE_ITEMS_LOADING,
    FETCH_ALL_LINE_ITEMS_SUCCESS,
    FETCH_ALL_LINE_ITEMS_ERROR
} from "./../actions/lineItem";

import { fetchAllLineItemsAPI } from './../apis/lineItem';

const fetchAllLineItemsLoading = () => ({
    type: FETCH_ALL_LINE_ITEMS_LOADING
});

const fetchAllLineItemsSuccess = ( allLineItems ) => ({
    type: FETCH_ALL_LINE_ITEMS_SUCCESS,
    payload: allLineItems
});

const fetchAllLineItemsError = () => ({
    type: FETCH_ALL_LINE_ITEMS_ERROR
});

export const fetchAllLineItems = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchAllLineItemsLoading() );
        
        return fetchAllLineItemsAPI( reqData )
        .then( response => {
            dispatch(fetchAllLineItemsSuccess( response.data ));
        })
        .catch( error => {
            dispatch(fetchAllLineItemsError());
        });
    });
}