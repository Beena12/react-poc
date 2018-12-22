import React, { Component } from 'react';
import './leftPanel.scss';

import { Button } from 'reactstrap'

const divStyleClose = {
    width: '60px',
}

const divStyleOpen = {
    width: '120px',
}


export default class LeftPanel extends Component{
    
    constructor(props){
    	super(props);
	
	    this.state = { 
	        isOpen: false,
	        divStyle: divStyleOpen
    	}
    }

	toggleCollapse = () => {
		if (this.state.isOpen) {
			this.divStyle = divStyleOpen;
		}
		else {
			this.divStyle = divStyleClose;
		}

		this.setState({
            isOpen: !this.state.isOpen
        });
	}

    render() {
	    return (
	 		<div style={this.divStyle}>
	 		<div className="left-panel">
					<div className="site-logo"></div>
		            <div className="bottom-nav">
		        		<div>
		        			<i className="fa fa-cogs icon-white" ></i>
		        		</div>
		        		<div>
								<Button color="link" onClick={this.toggleCollapse}>
									<i className="fa fa-angle-double-right  icon-white"></i>		
								</Button>
						</div>
		            </div>
	        </div>
	        </div>
	    );
	}
}