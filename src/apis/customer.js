
export const fetchCustomerAPI = ( reqData ) => {
    const url = `http://127.0.0.1:9000/api/customers/?cust_id=${ reqData }`;
    console.log("URL --------", url);
    return fetch( url )
            .then( response => response.json());
}

