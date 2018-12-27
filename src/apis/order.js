
export const fetchOrderListAPI = ( reqData ) => { 
    const url = `/api/orders/?customer=${ reqData.customerId }&sort_by=${ reqData.sortBy}&page=${reqData.page}&count=${reqData.count}`;
    
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
                method: 'POST',
                body: JSON.stringify(reqData),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then( response => response.json());
}

export const deleteOrderLineItemAPI = ( reqData ) => {
    const url = `/api/orderitems/?itemId=${ reqData.orderLineItemId }&orderId=${ reqData.orderId }`;

    return fetch( url, {
                method: 'DELETE'
            })
            .then( response => response.json());
}

export const updateOrderLineItemAPI = ( reqData ) => {
    const url = `/api/orderitems/${ reqData.orderLineItemId }`;
    const reqObj = {
        itemQty: reqData.itemQty
    };

    return fetch( url, {
                method: 'PATCH',
                body: JSON.stringify(reqObj),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then( response => response.json());
}