import React from 'react';
import './mainPanel.scss';

export default function MainPanel( props ) {
    return (
        <div className="main-panel">
            { props.children }
        </div>
    );
}