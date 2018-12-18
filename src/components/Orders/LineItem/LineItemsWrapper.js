import React, {Component} from 'react';
import { Button } from 'reactstrap';

import AllLineItemsList from "./AllLineItemsList";
import OrderLineItemList from "./OrderLineItemList";

import './lineItem.scss';

export default class LineItemsWrapper extends Component {
    state = {
        showAllLineItemsPanel: false
    }
    
    handleLineItemsAddClick = () => {
        if( this.state.showAllLineItemsPanel ) {
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

    render() {
        const { showAllLineItemsPanel } = this.state;
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
                        !showAllLineItemsPanel && <OrderLineItemList/>
                    }
                </div>
            </div>
        );
    }
}
