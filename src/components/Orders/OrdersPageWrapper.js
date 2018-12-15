import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import OrdersTableWrapper from './OrdersTable/OrdersTableWrapper';
import LineItemsWrapper from './LineItem/LineItemsWrapper';

class OrdersPageWrapper extends Component {
    render() {
        const { showLineItemsPanel } = this.props;
        const tableColWidth = showLineItemsPanel ? "9" : "12";
        return (
            <Row noGutters={true}>
                <Col sm={ tableColWidth }>
                    <OrdersTableWrapper/>
                </Col>
                {
                    showLineItemsPanel && 
                    <Col sm="3">
                        <LineItemsWrapper/>
                    </Col>
                }
            </Row>
        );
    }
}

const mapStateToProps = ( state ) => ({
    showLineItemsPanel: state.order.showLineItemsPanel
});

export default connect( mapStateToProps, null )( OrdersPageWrapper );