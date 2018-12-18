import { mockedLineItemsList } from "./../mocks/lineItem"; // Need to remove this once API is ready
import { 
    FETCH_ALL_LINE_ITEMS_LOADING,
    FETCH_ALL_LINE_ITEMS_SUCCESS,
    FETCH_ALL_LINE_ITEMS_ERROR
} from "./../actions/lineItem";


const initialState = {
    lineItemList: [],
    isLineItemListLoading: false
}

export const lineItemReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ALL_LINE_ITEMS_LOADING:
            return {
                ...state,
                isLineItemListLoading: true
            };

        case FETCH_ALL_LINE_ITEMS_SUCCESS:
            return {
                ...state,
                lineItemList: action.payload,
                isLineItemListLoading: false
            };

        case FETCH_ALL_LINE_ITEMS_ERROR:
            return {
                ...state,
                isLineItemListLoading: false
            };

        default:
            return initialState;
    }
}