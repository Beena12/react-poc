import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import MasterLineItemsList from "./MasterLineItemsList";
import OrderLineItemList from "./OrderLineItemList";

import { addOrderLineItem } from "./../../../actionCreators/order";
import { hideOrderLineItems } from "./../../../actionCreators/order";
import { fetchMasterLineItems } from "../../../actionCreators/lineItem";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {
        selectedLineItemId: null
    }

    handleItemSelection = ( e, lineItemId ) => {
        e.stopPropagation();
        this.setState({
            selectedLineItemId: lineItemId
        });
    }
    
    handleLineItemsAddClick = () => {
        const { selectedLineItemId } = this.state;
        const { currentSelectedOrderId, showOrderLineItems, fetchMasterLineItems, hideOrderLineItems } = this.props;
        if( showOrderLineItems ) {
            /* Open the master items list */
            this.setState({
                selectedLineItemId: null // Before showing the master line-item list just making sure no item should be selected by default
            });
            hideOrderLineItems();
            fetchMasterLineItems();
        }
        else {
            /* Add an item to Order */
            if( selectedLineItemId ) {
                const reqData = {
                    item: selectedLineItemId,
                    orderId: currentSelectedOrderId,
                    itemQty: 1
                };

                this.props.addOrderLineItem( reqData );
            }
        }
    }

    render() {
        const { selectedLineItemId } = this.state;
        const { showOrderLineItems } = this.props;
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
                            { showOrderLineItems && (
                                <>
                                <i className="fa fa-plus-circle btn-icon"></i>
                                <span className="btn-text">Add</span>
                                </>
                            )}
                            { !showOrderLineItems && (
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
                        !showOrderLineItems && (
                            <MasterLineItemsList 
                                selectedLineItemId = { selectedLineItemId }
                                onItemSelect = { this.handleItemSelection }
                            />
                        )
                    }
                    {
                        showOrderLineItems && <OrderLineItemList/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    currentSelectedOrderId: state.order.currentSelectedOrderId,
    showOrderLineItems: state.order.showOrderLineItems
});

const mapDispatchToProps = ( dispatch ) => ({
    hideOrderLineItems: () => { dispatch( hideOrderLineItems()) },
    fetchMasterLineItems: () => { dispatch( fetchMasterLineItems()) },
    addOrderLineItem: ( lineItem ) => { dispatch( addOrderLineItem( lineItem )) } 
})

export default connect( mapStateToProps, mapDispatchToProps )(LineItemsWrapper);
