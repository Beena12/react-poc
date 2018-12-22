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

const fetchCustomerSuccess = ( customerName ) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customerName
});

const fetchCustomerError = () => ({
    type: FETCH_CUSTOMER_ERROR
});


export const fetchCustomer = ( reqData ) => {
    return ( dispatch => {
        dispatch( fetchCustomerLoading() );

        return fetchCustomerAPI( reqData )
	        .then( response => {
                if( response.status === "200" && response.data ) {
                    const customerName = response.data.name;
                    const customerId = response.data._id;
                    const orderReqObj = {
                        customerId: customerId
                    };

                    dispatch( fetchOrderList( orderReqObj ));
                    dispatch( fetchCustomerSuccess( customerName ));
                } else {
                    fetchCustomerError();
                }
	        })
	        .catch( error => {
	            fetchCustomerError();
	        })
    });
}
