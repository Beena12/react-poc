import React from 'react';

export const sortingOptions = [
    {
        text: "Most Recent",
        value: "date-asc"
    }, 
    {
        text: "Oldest",
        value: "date-desc"
    }
];

const headerRenderer = ({label}) => {
    return (
        <div className="d-flex justify-content-center">
            <span className="font-weight-bold">
                {label}
            </span>
        </div>
    );
};

const cellRenderer = ({cellData}) => {
    return (
        <div className="d-flex justify-content-center">
            {cellData}
        </div>
    );
}

export const ordersTableColumns = [
    {
        key            : "order_id",
        label          : "Order No",
        widthFactor    : 0.15,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "date",
        label          : "Date",
        widthFactor    : 0.2,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "zip",
        label          : "Zip",
        widthFactor    : 0.1,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "state",
        label          : "St",
        widthFactor    : 0.1,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "createdBy",
        label          : "Created By",
        widthFactor    : 0.25,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "picked",
        label          : "Picked",
        widthFactor    : 0.1,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    },
    {
        key            : "shipped",
        label          : "Shipped",
        widthFactor    : 0.1,
        headerRenderer : headerRenderer,
        cellRenderer   : cellRenderer
    }
];