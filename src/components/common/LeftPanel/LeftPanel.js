import React, { Component } from 'react';
import './leftPanel.scss';

import { Button } from 'reactstrap'

 const divStyleClose = {
    height: '100vh', 
    width: '60px',
    minHeight: '200px',
    backgroundColor: '#565454'
}

 const divStyleOpen = {
    height: '100vh', 
    width: '120px',
    minHeight: '200px',
    backgroundColor: '#565454'
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
			        		<p>
								<Button color="link" onClick={this.toggleCollapse}>
									<i className="fa fa-angle-double-right  icon-white"></i>		
								</Button>
							</p>
						</div>
		            </div>
	        </div>
	        </div>
	    );
	}
}