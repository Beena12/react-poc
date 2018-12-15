import React from 'react';
import { Button, Row, Col } from "reactstrap";

export default function CardItem( props ) {
    const { uom, cost, units, description } = props;
    return (
        <div className="card-item">
            <div className="card-item-header">
                <span className="item-name">Item1</span>
                <div className="buttons-wrap float-right">
                    <Button 
                        color="secondary"
                        size="sm"
                        className="item-button"
                        onClick = { props.onDeleteClick }
                    >
                        <i className="fa fa-remove"></i>
                    </Button>
                    <Button 
                        color="primary"
                        size="sm"
                        className="item-button"
                        onClick = { props.onEditClick }
                    >
                        <i className="fa fa-edit"></i>
                    </Button>
                </div>
            </div>
            <div className="card-item-body">
                <Row>
                    <Col sm="12" className="mb-2">
                        <div className="field-label">UOM</div>
                        <div className="field-value">{ uom }</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mb-2">
                        <div className="field-label">COST</div>
                        <div className="field-value">{ cost }</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mb-2">
                        <div className="field-label">Units</div>
                        <div className="field-value">{ units }</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mb-2">
                        <div className="field-label">Description</div>
                        <div className="field-value">{ description }</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}