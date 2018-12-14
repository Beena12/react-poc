import { mockedOrdersList } from "./../mocks/order";

const initialState = {
    orderList: mockedOrdersList // Need to remove this once API is ready
};

export const orderReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "":
            
            break;
    
        default:
            return state;
    }
}