import React, { Component } from 'react';
import { connect } from "react-redux";

import OrdersPageWrapper from '../Orders/OrdersPageWrapper';

import LeftPanel from '../common/LeftPanel/LeftPanel';
import MainPanel from '../common/MainPanel/MainPanel';
import Header from '../common/Header/Header';
import Content from '../common/Content/Content';

import './App.scss';

class App extends Component {
	render() {

        const { collapseLeftPanel } = this.props;
        const leftPanelWidth = collapseLeftPanel ? '12px' : '25px';
        const mainPanelWidth = leftPanelWidth;
        const leftPanelStyle = {width: leftPanelWidth};
        const mainPanelStyle = {width: mainPanelWidth};

        console.log("this.props .....", this.props.collapseLeftPanel);
        console.log("leftPanelWidth in main.....", leftPanelWidth)
		return (
			<div className="container-fluid">
				<div className="row">
					<LeftPanel panelWidth = {leftPanelWidth}/>
					<MainPanel >
						<Header/>
						<Content>
							<OrdersPageWrapper/>
						</Content>
					</MainPanel>
				</div>
			</div>
		);
	}
}


export default App ;
