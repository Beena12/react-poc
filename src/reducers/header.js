import { 
    FETCH_CUSTOMER_LOADING,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_ERROR,

} from "./../actions/customer";

const initialState = {
    customerName: "",
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
                customerName: action.payload
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