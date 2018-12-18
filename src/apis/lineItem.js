export const fetchAllLineItemsAPI = () => {
    const url = `/api/items`

    return fetch( url )
            .then( response => response.json());
}