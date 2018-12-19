import { 
    FETCH_CUSTOMER_LOADING,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_ERROR,

} from "./../actions/customer";

const initialState = {
    customer: {
    	cust_id: -10,
    	_id: -10,
    	create_date: '00-00-00T00:00:00.000Z',
    	name: "some name",
    	__v: 0
    }, 

    isCustomerLoading: false,

};

export const headerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_CUSTOMER_LOADING:
            return {
                ...state,
                isCustomerLoading: true
            };

        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                isCustomerLoading: false,
                customer: action.payload.customer
            };

        case FETCH_CUSTOMER_ERROR:
            return {
                ...state,
                isCustomerLoading: false
            };
        default:
            return state;
    }
}