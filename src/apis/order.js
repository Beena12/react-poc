
export const fetchOrderListAPI = ( reqData ) => {
//hardcoded for testing purpose as ....as fetching customer by cust_id isnt working 
//    const url = `/orders/${ reqData.customerId }/?sort_by=${ reqData.sortBy}`;
    const url = `/api/orders/?customer=5c14d24021c57b1395612915`;


    return fetch( url )
            .then( response => response.json());
}

export const fetchOrderLineItemsAPI = ( reqData ) => {
    const orderId = reqData.orderId;
//hardcoded api for testing purpose only
    const url = `http://127.0.0.1:9000/api/orders/5c1b555aef0c582db44344c1`

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