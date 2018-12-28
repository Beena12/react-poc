export const fetchMasterLineItemsAPI = ( reqData ) => {
    const url = `/api/items/?page=${reqData.page}&count=${reqData.count}&search=${reqData.searchValue ? reqData.searchValue : ''}`;
    // const url = `/api/items${ searchVal ? `/?search=${searchVal}`:``}`;

    return fetch( url )
            .then( response => response.json());
}