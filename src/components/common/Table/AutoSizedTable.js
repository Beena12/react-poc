import React from 'react';
import { Table, AutoSizer } from "react-virtualized";

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
