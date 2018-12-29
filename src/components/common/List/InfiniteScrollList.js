import React from 'react';
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";

export default function InfiniteScrollList( props ) {
    const {
        list,
        className,
        minimumBatchSize,
        preFetchThreshold,
        totalRowCount,
        selectedRow,

        rowRenderer,
        loadMoreRows
    } = props;

    function _isRowLoaded({index}) {
        return !!props.list[index];
    }

    function _loadMoreRows({startIndex, stopIndex}) {
        return loadMoreRows( startIndex, stopIndex );
    }

    return (
        <InfiniteLoader
            isRowLoaded = {_isRowLoaded}
            loadMoreRows = {_loadMoreRows}
            rowCount = { totalRowCount}
            minimumBatchSize = { minimumBatchSize }
            threshold = { preFetchThreshold }
        >
            {({onRowsRendered, registerChild}) => (
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref = {registerChild}
                            height = { height }
                            width = { width }
                            rowCount = { list.length }
                            rowHeight = {80}
                            overscanRowCount = {3}

                            onRowsRendered = {onRowsRendered}
                            rowRenderer = {( rowObj ) => rowRenderer( rowObj, selectedRow) }
                            className = { className }
                        />
                    )}
                </AutoSizer>
            )}
        </InfiniteLoader>
    );
}

InfiniteScrollList.defaultProps = {
    minimumBatchSize: 10,
    preFetchThreshold: 5
}