import React from 'react';

import './content.scss';

export default function Content( props ) {
    return (
        <div className="content">
            { props.children }
        </div>
    );
}