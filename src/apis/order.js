
export const fetchOrderListAPI = ( reqData ) => {
    const url = `/orders/${ reqData.customerId }/?sort_by=${ reqData.sortBy}`;
    
    return fetch( url )
            .then( response => response.json());
}

export const fetchOrderLineItemsAPI = ( reqData ) => {
    return {}; 
}