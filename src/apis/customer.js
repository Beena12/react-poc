
export const fetchCustomerAPI = ( reqData ) => {
    const url = `/api/customers/?cust_id=${ reqData }`;

    return fetch( url )
            .then( response => response.json());
}

