
export const fetchOrderListAPI = ( reqData ) => {
    const url = `/orders/${ reqData.customerId }/?sort_by=${ reqData.sortBy}`;
    
    return fetch( url )
            .then( response => response.json());
}

export const fetchOrderLineItemsAPI = ( reqData ) => {
    const orderId = reqData.orderId;
    const url = `/api/orders/${ orderId }`

    return fetch( url )
            .then( response => response.json());
}

export const addOrderLineItemAPI = ( reqData ) => {
    const url = `/api/orderitems`;
    
    return fetch( url, {
                body: JSON.stringify(reqData), 
                method: 'POST'
            })
            .then( response => response.json());
}