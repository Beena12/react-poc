import React, { Component } from 'react';
import { connect } from "react-redux";
import './leftPanel.scss';

import 'react-virtualized/styles.css';
import { Button } from 'reactstrap'


class LeftPanel extends Component {

    state = { 
        collapseLeftPanel: true
	};		

	toggleCollapse = () => {
		this.setState({
            collapseLeftPanel: !this.state.collapseLeftPanel
        });

        console.log("collapseLeftPanel..", this.state.collapseLeftPanel);
        console.log("panelWidth..", this.props.panelWidth);
	}

    render () {
	    return (
	    	<div style = {{width: this.props.panelWidth}}>
	 		<div className="left-panel">
					<div className="site-logo"></div>
		            <div className="bottom-nav">
		        		<div>
		        			<i className="fa fa-cogs icon-white" ></i>
		        		</div>
		        		<div>
								<Button color="link" onClick={this.toggleCollapse}>
									<i className="fa fa-angle-right  icon-white"></i>		
								</Button>
						</div>
		            </div>
		        </div>
		     </div>
	    );
	}
}

const mapStateToProps = ( state ) => ({
    collapseLeftPanel: state.collapseLeftPanel
});

export default connect( mapStateToProps, null )( LeftPanel );