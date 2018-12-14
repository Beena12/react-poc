import React from 'react';
import { Table, AutoSizer } from "react-virtualized";

import 'react-virtualized/styles.css';

/**
 * This is a HOC which on top of `react-virtualized` Table component
 * This sets/adjusts the height, width of Table with resizing.
 * @param {*} props 
 */
export default function AutoSizedTable( props ) {
    return (
        <div style={{width: props.width, height: props.height}} >
            <AutoSizer>
                {({ height, width }) => {
                    const newProps = {
                        ...props,
                        height : height,
                        width  : width
                    };
                    return (
                        <Table {...newProps}>
                            { props.children }
                        </Table>
                    );
                }}
            </AutoSizer>
        </div>
    );
};
