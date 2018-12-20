import { 
    FETCH_CUSTOMER_LOADING,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_ERROR,

} from './../actions/customer';

import {
    fetchCustomerAPI,
} from './../apis/customer';

import {
    fetchOrderList,
} from './order';

const fetchCustomerLoading = () => ({
    type: FETCH_CUSTOMER_LOADING
});

const fetchCustomerSuccess = ( response ) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: response.name
});

const fetchCustomerError = () => ({
    type: FETCH_CUSTOMER_ERROR
});


export const fetchCustomer = ( reqData ) => {
    return ( dispatch => {
        return fetchCustomerAPI( reqData )
	        .then( response => {
	            dispatch(fetchOrderList( response.cust_id ));
                fetchCustomerSuccess( response.data );                
	        })
	        .catch( error => {
	            fetchCustomerError();
	        })
    });
}
