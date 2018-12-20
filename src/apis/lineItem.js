export const fetchMasterLineItemsAPI = () => {
    const url = `/api/items`

    return fetch( url )
            .then( response => response.json());
}