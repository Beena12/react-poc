import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import CardItem from "./CardItem";

import { 
    updateOrderLineItem, 
    deleteOrderLineItem
} from "./../../../actionCreators/order";


class OrderLineItemList extends Component {
    handleUpdateClick = ( itemQty, lineItem ) => {
        const updateReqData = {
            orderLineItemId: lineItem._id,
            itemQty: itemQty
        };
        this.props.updateOrderLineItem( updateReqData );
    }

    handleDeleteClick = ( lineItem ) => {
        const deleteReqData = {
            orderLineItemId: lineItem._id,
            orderId: this.props.currOrderId
        };
        this.props.deleteOrderLineItem( deleteReqData );
    }

    render() {
        const { currOrderLineItems, isLoading } = this.props;
        return (
            <div className="card-list-container">
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
                            name = { lineItem.item.name }
                            uom  = { lineItem.item.uom }
                            cost = { lineItem.item.cost }
                            description = { lineItem.item.description }
                            units = { lineItem.itemQty }
                            isUpdateInProgress = { lineItem.isUpdateInProgress }
                            isDeleteInProgress = { lineItem.isDeleteInProgress }
                            onUpdateClick = { (itemQty) => this.handleUpdateClick( itemQty, lineItem ) } 
                            onDeleteClick = { () => this.handleDeleteClick( lineItem ) }
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
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    currOrderId: state.order.currentSelectedOrderId,
    currOrderLineItems: state.order.orderLineItems,
    isLoading: state.order.isOrderLineItemsLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    updateOrderLineItem: ( reqData ) => dispatch( updateOrderLineItem( reqData )),
    deleteOrderLineItem: ( reqData ) => dispatch( deleteOrderLineItem( reqData ))
});

export default connect( mapStateToProps, mapDispatchToProps )( OrderLineItemList );