import React from 'react';
import { Row, Col } from 'reactstrap';

import OrdersTableWrapper from './OrdersTable/OrdersTableWrapper';
import LineItemsWrapper from './LineItem/LineItemsWrapper';

export default function OrdersPageWrapper() {
    return (
        <Row noGutters={true}>
            <Col sm="9">
                <OrdersTableWrapper/>
            </Col>
            <Col sm="3">
                <LineItemsWrapper/>
            </Col>
        </Row>
    );
}