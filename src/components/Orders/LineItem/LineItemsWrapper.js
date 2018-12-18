import React, {Component} from 'react';
import { connect } from "react-redux";

import { Button } from 'reactstrap';

import CardItem from "./CardItem";
import AllLineItemsList from "./AllLineItemsList";

import { updateOrderLineItem } from "./../../../actionCreators/order";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {
        showAllLineItemsPanel: false
    }
    
    handleLineItemsAddClick = () => {
        if( this.state.showAllLineItemsPanel ) {
            // This is temporary, need to dispatch an action here
            this.setState({
                showAllLineItemsPanel: false
            });
        }
        else {
            this.setState({
                showAllLineItemsPanel: true
            });
        }
    }

    handleUpdateClick = ( data ) => {

    }

    handleDeleteClick = ( data ) => {
        
    }

    render() {
        const { showAllLineItemsPanel } = this.state;
        const { currOrderLineItems } = this.props;
        return (
            <div className="line-items-wrapper">
                <div className="line-items-header">
                    <div className="label float-left">Details - Line Items</div>
                    <div className="buttons-wrap float-right">
                        <Button 
                            color="primary"
                            size="sm" 
                            onClick = { this.handleLineItemsAddClick }
                        >
                            { !showAllLineItemsPanel && (
                                <>
                                <i className="fa fa-plus-circle btn-icon"></i>
                                <span className="btn-text">Add</span>
                                </>
                            )}
                            { showAllLineItemsPanel && (
                                <>
                                <i className="fa fa-save btn-icon"></i>
                                <span className="btn-text">Save</span>
                                </>
                            )}
                        </Button>
                    </div>
                </div>
                <div className="card-list-container">
                    {
                        showAllLineItemsPanel && <AllLineItemsList/>
                    }
                    {
                        !showAllLineItemsPanel && (currOrderLineItems.length > 0) && (
                            currOrderLineItems.map( lineItem => (
                                <CardItem
                                    key = { lineItem.id }
                                    uom  = { lineItem.uom }
                                    cost = { lineItem.cost }
                                    description = { lineItem.description }
                                    units = { lineItem.units }
                                    onUpdateClick = { this.handleUpdateClick } 
                                    onDeleteClick = { this.handleDeleteClick }
                                />
                            ))
                        )
                    }
                    {
                        !showAllLineItemsPanel && (currOrderLineItems.length === 0) && (
                            <div className="d-flex align-items-center justify-content-center h-100">
                                No Line Items found for this Order
                            </div>
                        )
                    }
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