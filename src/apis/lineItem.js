export const fetchMasterLineItemsAPI = ( searchVal ) => {
    const url = `/api/items${ searchVal ? `/?search=${searchVal}`:``}`;

    return fetch( url )
            .then( response => response.json());
}