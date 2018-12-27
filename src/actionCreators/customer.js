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

import { DEFAULT_PAGE_SIZE } from './../constants';

const fetchCustomerLoading = () => ({
    type: FETCH_CUSTOMER_LOADING
});

const fetchCustomerSuccess = ( customer ) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer
});

const fetchCustomerError = () => ({
    type: FETCH_CUSTOMER_ERROR
});


export const fetchCustomer = ( reqData ) => {
    return ((dispatch, getState) => {
        dispatch( fetchCustomerLoading() );

        return fetchCustomerAPI( reqData )
	        .then( response => {
                if( response.status === "200" && response.data ) {
                    const customer = response.data;
                    const customerId = response.data._id;
                    const orderReqObj = {
                        customerId: customerId,
                        sortBy: getState().order.currentOrderBy.value,
                        page: 0,
                        count: DEFAULT_PAGE_SIZE
                    };

                    dispatch( fetchOrderList( orderReqObj ));
                    dispatch( fetchCustomerSuccess( customer ));
                } else {
                    fetchCustomerError();
                }
	        })
	        .catch( error => {
	            fetchCustomerError();
	        })
    });
}
