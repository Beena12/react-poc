
export const fetchOrderListAPI = ( reqData ) => { 
    const url = `/api/orders/?customer=${ reqData.customerId }&sort_by=${ reqData.sortBy}`;
    
    return fetch( url )
            .then( response => response.json());
}

export const fetchOrderLineItemsAPI = ( orderId ) => {
    const url = `/api/orders/${ orderId }`

    return fetch( url )
            .then( response => response.json());
}

export const addOrderLineItemAPI = ( reqData ) => {
    const url = `/api/orderitems`;
    
    return fetch( url, {
                body: JSON.stringify(reqData), 
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then( response => response.json());
}