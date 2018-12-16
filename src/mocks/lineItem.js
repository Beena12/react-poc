import loremIpsum from "lorem-ipsum";


export const mockedLineItemsList = Array(15).fill().map(( val, index) => {
    return {
        id: index,
        name : loremIpsum({
                units: 'words',
                count: 1
            }),
        description : loremIpsum({
                units: 'words',
                count: 10
            }),
        cost: 100,
        uom: "Each"
    };
});
