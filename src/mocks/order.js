// Returns the date = currDate - days(input)
const getDate = ( days ) => {
    const date = new Date();
    date.setDate( date.getDate() - days );
    
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if( dd < 10 ) {
        dd = '0' + dd;
    } 

    if( mm < 10 ) {
        mm = '0' + mm;
    } 

    const returnDate = dd + '-' + mm + '-' + yyyy;
    return returnDate;
}

export const mockedOrdersList = Array(500).fill().map((val, idx) => {
    return {
        order_no    : 3553452 - idx, 
        date        : getDate( idx ),
        zip         : "83234",
        state       : "AZ",
        created_by  : "Jane Doe",
        is_picked   : "Yes",
        is_shipped  : "Yes"
    }
});
