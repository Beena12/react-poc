import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import CardItem from "./CardItem";

import { updateOrderLineItem } from "./../../../actionCreators/order";

class OrderLineItemList extends Component {
    handleUpdateClick = ( data ) => {

    }

    handleDeleteClick = ( data ) => {
        
    }

    render() {
        const { currOrderLineItems, isLoading } = this.props;
        return (
            <>
            {
                isLoading && (
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <Loader 
                            type="Puff"
                            color="#00BFFF"
                            height="100"	
                            width="100"
                        />
                    </div>
                )
            }
            {
                !isLoading && (currOrderLineItems.length > 0) && (
                    currOrderLineItems.map( lineItem => (
                        <CardItem
                            key = { lineItem._id }
                            uom  = { lineItem.item.uom }
                            cost = { lineItem.item.cost }
                            description = { lineItem.item.description }
                            units = { lineItem.itemQty }
                            onUpdateClick = { this.handleUpdateClick } 
                            onDeleteClick = { this.handleDeleteClick }
                        />
                    ))
                )
            }
            {
                !isLoading && (currOrderLineItems.length === 0) && (
                    <div className="d-flex align-items-center justify-content-center h-100">
                        No Line Items found for this Order
                    </div>
                )
            }
            </>
        );
    }
}

const mapStateToProps = ( state ) => ({
    currOrderLineItems: state.order.orderLineItems,
    isLoading: state.order.isOrderLineItemsLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    updateOrderLineItem: ( reqData ) => dispatch( updateOrderLineItem( reqData ))
});

export default connect( mapStateToProps, mapDispatchToProps )( OrderLineItemList );