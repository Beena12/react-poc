import React, {Component} from 'react';
import { connect } from "react-redux";

import { Button } from 'reactstrap';

import CardItem from "./CardItem";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {

    }
    
    handleAddLineItemsClick = () => {

    }

    render() {
        return (
            <div className="line-items-wrapper">
                <div className="line-items-header">
                    <div className="label float-left">Details - Line Items</div>
                    <div className="buttons-wrap float-right">
                        <Button 
                            color="primary"
                            size="sm" 
                            onClick = { this.handleAddLineItemsClick }
                        >
                            <i className="fa fa-plus-circle btn-icon"></i>
                            <span className="btn-text">Add</span>
                        </Button>
                    </div>
                </div>
                <div className="card-list-container">
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )( LineItemsWrapper );