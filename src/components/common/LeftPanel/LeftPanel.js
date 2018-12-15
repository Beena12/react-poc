import React from 'react';
import './leftPanel.scss';

import Collapse from '../Collapse/Collapse';


export default function LeftPanel() {
    return (
        <div className="left-panel">
            <div className="site-logo"></div>
            <div className="bottom-nav">
        		<i className="fa fa-cogs icon-white"></i>
        		<p>< Collapse /></p>
            </div>
        </div>
    );
}