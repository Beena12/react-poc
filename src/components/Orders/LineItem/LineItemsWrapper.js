import React, {Component} from 'react';
import { connect } from "react-redux";

import { Button } from 'reactstrap';

import CardItem from "./CardItem";
import { updateOrderLineItem } from "./../../../actionCreators/order";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {

    }
    
    handleAddLineItemsClick = () => {

    }

    handleUpdateClick = ( data ) => {

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
                    <CardItem onUpdateClick = { this.handleUpdateClick }/>
                    <CardItem/>
                    <CardItem/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    currOrderLineItems: state.order.orderLineItems
});

const mapDispatchToProps = ( dispatch ) => ({
    updateOrderLineItem: ( reqData ) => dispatch( updateOrderLineItem( reqData ))
});

export default connect( mapStateToProps, mapDispatchToProps )( LineItemsWrapper );