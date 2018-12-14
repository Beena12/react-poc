import React from 'react';

import { Column } from "react-virtualized";
import AutoSizedTable from './AutoSizedTable';

export default function VirtualTable( props ) {
    const { columns, data, noRowsRenderer, height, width } = props;
    return (
        <AutoSizedTable
            data           = { data }
            width          = { width }
            height         = { height }
            rowHeight      = { 40 }
            headerHeight   = { 50 }
            rowCount       = { data.length }
            noRowsRenderer = { noRowsRenderer }
            rowGetter      = {({ index }) => data[index]}
            tableClassName = ""
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