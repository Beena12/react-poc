import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import MasterLineItemsList from "./MasterLineItemsList";
import OrderLineItemList from "./OrderLineItemList";

import { addOrderLineItem } from "./../../../actionCreators/order";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {
        showMasterLineItemsPanel: false,
        selectedLineItemId: null
    }

    handleItemSelection = ( e, lineItemId ) => {
        e.stopPropagation();
        this.setState({
            selectedLineItemId: lineItemId
        });
    }
    
    handleLineItemsAddClick = () => {
        const { showMasterLineItemsPanel, selectedLineItemId } = this.state;
        const { currentSelectedOrderId } = this.props;
        if( showMasterLineItemsPanel ) {
            if( selectedLineItemId ) {
                const reqData = {
                    item: selectedLineItemId,
                    orderId: currentSelectedOrderId,
                    itemQty: 1
                };

                this.props.addOrderLineItem( reqData );
            }
            
            this.setState({
                showMasterLineItemsPanel: false,
                selectedLineItemId: null
            });
        }
        else {
            this.setState({
                showMasterLineItemsPanel: true
            });
        }
    }

    render() {
        const { showMasterLineItemsPanel, selectedLineItemId } = this.state;
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
                            { !showMasterLineItemsPanel && (
                                <>
                                <i className="fa fa-plus-circle btn-icon"></i>
                                <span className="btn-text">Add</span>
                                </>
                            )}
                            { showMasterLineItemsPanel && (
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
                        showMasterLineItemsPanel && (
                            <MasterLineItemsList 
                                selectedLineItemId = { selectedLineItemId }
                                onItemSelect = { this.handleItemSelection }
                            />
                        )
                    }
                    {
                        !showMasterLineItemsPanel && <OrderLineItemList/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    currentSelectedOrderId: state.order.currentSelectedOrderId
});

const mapDispatchToProps = ( dispatch ) => ({
    addOrderLineItem: ( lineItem ) => { dispatch( addOrderLineItem( lineItem )) } 
})

export default connect( mapStateToProps, mapDispatchToProps )(LineItemsWrapper);
