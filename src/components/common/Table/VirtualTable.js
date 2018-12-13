import React from 'react';

import { Column } from "react-virtualized";
import AutoSizedTable from './AutoSizedTable';

export default function VirtualTable( props ) {
    const { columns } = props;
    return (
        <AutoSizedTable
            data           = {}
            width          = {}
            height         = {}
            rowHeight      = {40}
            headerHeight   = {50}
            rowCount       = {}
            noRowsRenderer = {}
            tableClassName = ""
        >
            {
                columns.map( column => (
                    <Column
                        dataKey        = { column.key }
                        width          = { column.width }
                        label          = { column.label }
                        headerRenderer = { column.headerRenderer }
                        cellRenderer   = { column.cellRenderer }
                    />
                ))
            }
        </AutoSizedTable>
    );
}