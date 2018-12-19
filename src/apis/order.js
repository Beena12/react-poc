
export const fetchOrderListAPI = ( reqData ) => {
//    const url = `/orders/${ reqData.customerId }/?sort_by=${ reqData.sortBy}`;
    const url = `http://127.0.0.1:9000/api/orders/?customer=5c14d24021c57b1395612915`;
    return fetch( url )
            .then( response => response.json());
}

export const fetchOrderLineItemsAPI = ( reqData ) => {
    const orderId = reqData.orderId;
    const url = `/api/orders/${ orderId }`

    return fetch( url )
            .then( response => response.json());
}