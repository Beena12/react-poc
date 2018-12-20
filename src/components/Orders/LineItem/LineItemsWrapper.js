import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import AllLineItemsList from "./AllLineItemsList";
import OrderLineItemList from "./OrderLineItemList";

import { addOrderLineItem } from "./../../../actionCreators/order";

import './lineItem.scss';

class LineItemsWrapper extends Component {
    state = {
        showAllLineItemsPanel: false,
        selectedLineItemId: null
    }

    handleItemSelection = ( e, lineItemId ) => {
        e.stopPropagation();
        this.setState({
            selectedLineItemId: lineItemId
        });
    }
    
    handleLineItemsAddClick = () => {
        const { showAllLineItemsPanel, selectedLineItemId } = this.state;
        const { currentSelectedOrderId } = this.props;
        if( showAllLineItemsPanel ) {
            if( selectedLineItemId ) {
                const reqData = {
                    item: selectedLineItemId,
                    orderId: currentSelectedOrderId,
                    itemQty: 1
                };

                this.props.addOrderLineItem( reqData );
            }
            
            this.setState({
                showAllLineItemsPanel: false,
                selectedLineItemId: null
            });
        }
        else {
            this.setState({
                showAllLineItemsPanel: true
            });
        }
    }

    render() {
        const { showAllLineItemsPanel, selectedLineItemId } = this.state;
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
                        showAllLineItemsPanel && (
                            <AllLineItemsList 
                                selectedLineItemId = { selectedLineItemId }
                                onItemSelect = { this.handleItemSelection }
                            />
                        )
                    }
                    {
                        !showAllLineItemsPanel && <OrderLineItemList/>
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
