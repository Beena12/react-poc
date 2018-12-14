export const mockedOrdersList = Array(500).fill().map((val, idx) => {
    return {
        order_no: 3553452 + idx, 
        date: "6-15-2020",
        zip: "83234",
        state: "AZ",
        created_by: "Jane Doe",
        is_picked: "Yes",
        is_shipped: "Yes"
    }
});