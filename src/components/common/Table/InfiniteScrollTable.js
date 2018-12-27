import React from 'react';

import { InfiniteLoader } from "react-virtualized";
import VirtualTable from './VirtualTable';

export default function InfiniteScrollTable( props ) {
    const { 
        columns, 
        data,
        totalRowCount,
        noRowsRenderer, 
        height, 
        width, 
        headerRowClass, 
        evenRowClass, 
        oddRowClass,
        onRowClick,
        selectedRowIndex,
        selectedRowClass,
        minimumBatchSize,
        preFetchThreshold
    } = props;

    function _isRowLoaded({index}) {
        return !!props.data[index];
    }

    function _loadMoreRows({startIndex, stopIndex}) {
        return props.loadMoreOrders( startIndex, stopIndex );
    } 

    return (
        <InfiniteLoader
            isRowLoaded = {_isRowLoaded}
            loadMoreRows = {_loadMoreRows}
            minimumBatchSize = { minimumBatchSize }
            threshold = { preFetchThreshold }
            rowCount = { totalRowCount}
        >
            {({onRowsRendered, registerChild}) => (                
                <VirtualTable
                    registerChildRef={registerChild}
                    width={width}
                    height={height}
                    
                    data = {data }

                    columns={columns}
                    rowCount={data.length}
                    
                    headerRowClass = {headerRowClass}
                    evenRowClass = {evenRowClass}
                    oddRowClass = {oddRowClass}
                    selectedRowClass = {selectedRowClass}
                    selectedRowIndex = {selectedRowIndex}
                    
                    onRowClick = { onRowClick }
                    noRowsRenderer = {noRowsRenderer}
                    onRowsRendered={onRowsRendered}
                />
            )}
        </InfiniteLoader>
    );
}

InfiniteScrollTable.defaultProps = {
    minimumBatchSize: 10,
    preFetchThreshold: 5
}
