import React, { Component } from 'react';

import LeftPanel from '../common/LeftPanel/LeftPanel';
import MainPanel from '../common/MainPanel/MainPanel';

import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<LeftPanel/>
					<MainPanel>
						
					</MainPanel>
				</div>
			</div>
		);
	}
}

export default App;
