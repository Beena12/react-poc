import { 
    FETCH_MASTER_LINE_ITEMS_LOADING,
    FETCH_MASTER_LINE_ITEMS_SUCCESS,
    FETCH_MASTER_LINE_ITEMS_ERROR
} from "./../actions/lineItem";

import { fetchMasterLineItemsAPI } from './../apis/lineItem';

const fetchMasterLineItemsLoading = () => ({
    type: FETCH_MASTER_LINE_ITEMS_LOADING
});

const fetchMasterLineItemsSuccess = ( masterLineItems ) => ({
    type: FETCH_MASTER_LINE_ITEMS_SUCCESS,
    payload: masterLineItems
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