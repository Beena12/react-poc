import { mockedLineItemsList } from "./../mocks/lineItem"; // Need to remove this once API is ready

const initialState = {
    lineItemList: mockedLineItemsList
}

export const lineItemReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "":
            
            break;
    
        default:
            return initialState;
    }
}