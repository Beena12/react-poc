
export const fetchOrderListAPI = ( reqData ) => {
//    const url = `/orders/${ reqData.customerId }/?sort_by=${ reqData.sortBy}`;
    const url = `/api/orders/?customer=${ reqData.customerId }`;
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