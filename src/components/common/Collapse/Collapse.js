import React, { Component } from 'react';

import { Button } from 'reactstrap'

export default class Collapse extends Component{

		state = {
			isCollapsed: false
		}

		toggleCollapse = () => {
			this.setState({
				isCollapsed: !this.state.isCollapsed
			});
		}

		render(){
			return( 
				<div>
					<Button color="link" onClick={this.toggleCollapse}>
					<i className="fa fa-angle-double-right  icon-white"></i>		
					</Button>
				</div>
			);
		}
}
