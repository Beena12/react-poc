import React, { Component } from 'react';

import OrdersWrapper from '../Orders/OrdersWrapper';

import LeftPanel from '../common/LeftPanel/LeftPanel';
import MainPanel from '../common/MainPanel/MainPanel';
import Header from '../common/Header/Header';
import Content from '../common/Content/Content';

import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<LeftPanel/>
					<MainPanel>
						<Header/>
						<Content>
							<OrdersWrapper/>
						</Content>
					</MainPanel>
				</div>
			</div>
		);
	}
}

export default App;
