// import { mockedLineItemsList } from "./../mocks/lineItem"; // Need to remove this once API is ready
import { 
    FETCH_MASTER_LINE_ITEMS_LOADING,
    FETCH_MASTER_LINE_ITEMS_SUCCESS,
    FETCH_MASTER_LINE_ITEMS_ERROR,

    FETCH_MORE_MASTER_LINE_ITEMS_LOADING,
    FETCH_MORE_MASTER_LINE_ITEMS_SUCCESS,
    FETCH_MORE_MASTER_LINE_ITEMS_ERROR,
} from "./../actions/lineItem";

import {
    ADD_ORDER_LINE_ITEM_LOADING,
    ADD_ORDER_LINE_ITEM_SUCCESS,
    ADD_ORDER_LINE_ITEM_ERROR
} from './../actions/order';


const initialState = {
    lineItemList: [], //mockedLineItemsList,
    totalItemsCount: 0,
    isLineItemListLoading: false,
    showAddLineItemError: false
}

export const lineItemReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_MASTER_LINE_ITEMS_LOADING:
            return {
                ...state,
                isLineItemListLoading: true
            };

        case FETCH_MASTER_LINE_ITEMS_SUCCESS:
            return {
                ...state,
                lineItemList: action.payload.items,
                totalItemsCount: action.payload.totalRecords,
                isLineItemListLoading: false
            };

        case FETCH_MASTER_LINE_ITEMS_ERROR:
            return {
                ...state,
                isLineItemListLoading: false
            };

        case FETCH_MORE_MASTER_LINE_ITEMS_SUCCESS:
            const newLineItemList = [...state.lineItemList, ...action.payload.items]
            return {
                ...state,
                lineItemList: newLineItemList,
                totalItemsCount: action.payload.totalRecords
            };

        case ADD_ORDER_LINE_ITEM_LOADING:
            return {
                ...state,
                isLineItemListLoading: true,
                showAddLineItemError: false
            }

        case ADD_ORDER_LINE_ITEM_SUCCESS:
            return {
                ...state,
                isLineItemListLoading: false,
                showAddLineItemError: false
            }

        case ADD_ORDER_LINE_ITEM_ERROR:
            return {
                ...state,
                isLineItemListLoading: false,
                showAddLineItemError: true
            }

        default:
            return state;
    }
}