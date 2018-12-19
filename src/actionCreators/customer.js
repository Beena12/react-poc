import { 
    FETCH_CUSTOMER_LOADING,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_ERROR,

} from './../actions/customer';

import {
    fetchCustomerAPI,
} from './../apis/customer';

const fetchCustomerLoading = () => ({
    type: FETCH_CUSTOMER_LOADING
});

const fetchCustomerSuccess = ( response ) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: response
});

const fetchCustomerError = () => ({
    type: FETCH_CUSTOMER_ERROR
});


export const fetchCustomer = ( reqData ) => {
    console.log("reqData ----", reqData);
    return ( dispatch => {
        dispatch( fetchCustomerLoading() );
             
        return fetchCustomerAPI( reqData )
        .then( response => {
            fetchCustomerSuccess( response );
        })
        .catch( error => {
            fetchCustomerError();
        });
    });
}
