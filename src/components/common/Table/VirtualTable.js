import React from 'react';

import { Column } from "react-virtualized";
import AutoSizedTable from './AutoSizedTable';

export default function VirtualTable( props ) {
    const { 
            columns, 
            data, 
            noRowsRenderer, 
            height, 
            width, 
            headerRowClass, 
            evenRowClass, 
            oddRowClass ,
            onRowClick,
            selectedRowIndex,
            selectedRowClass
        } = props;

    const getRowClassName = ( row ) => {
        const { index } = row;
        if( index === -1){
            return headerRowClass;
        }
        else if( index === selectedRowIndex ) {
            return selectedRowClass;
        } 
        else {
            return index % 2 === 0 ? evenRowClass : oddRowClass;
        }
    }

    return (
        <AutoSizedTable
            data            = { data }
            width           = { width }
            height          = { height }
            rowHeight       = { 40 }
            headerHeight    = { 40 }
            rowCount        = { data.length }
            noRowsRenderer  = { noRowsRenderer }
            rowGetter       = {({ index }) => data[index]}
            tableClassName  = ""
            headerClassName = ""
            rowClassName    = { getRowClassName }
            gridClassName   = 'no-outline'
            onRowClick      = { onRowClick }
        >
            {
                columns.map( column => (
                    <Column
                        key            = { column.key }
                        dataKey        = { column.key }
                        width          = { column.widthFactor * width }
                        label          = { column.label }
                        headerRenderer = { column.headerRenderer }
                        cellRenderer   = { column.cellRenderer }
                    />
                ))
            }
        </AutoSizedTable>
    );
}

VirtualTable.defaultProps = {
    headerRowClass: "",
    evenRowClass: "",
    selectedRowClass: "",
};