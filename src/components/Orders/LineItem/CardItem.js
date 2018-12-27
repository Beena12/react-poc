import React, { Component } from 'react';
import { Button, Row, Col } from "reactstrap";
import Loader from 'react-loader-spinner';

export default class CardItem extends Component {
    static defaultProps = {
        uom: "Each",
        cost: 1,
        units: 1,
        description: "-"
    }

    state = {
        isEditMode: false
    }

    unitsInputElm = React.createRef();

    handleEditClick = () => {
        if ( this.state.isEditMode ) {
            const inputValue = this.unitsInputElm.current.value;
            this.props.onUpdateClick( inputValue );
        }
        
        this.setState({
            isEditMode: !this.state.isEditMode
        });
        
    }

    render() {
        const { uom, cost, units, name, description, isDeleteInProgress, onDeleteClick, isUpdateInProgress } = this.props;
        const { isEditMode } = this.state;
        return (
            <div className="card-item">
                <div className="card-item-header">
                    <span className="item-name">{name}</span>
                    <div className="buttons-wrap float-right">
                        <Button 
                            color="secondary"
                            size="sm"
                            className="item-button"
                            disabled = { isDeleteInProgress || isUpdateInProgress }
                            onClick = { onDeleteClick }
                        >
                            <i className="fa fa-trash"></i>
                        </Button>
                        <Button 
                            color="primary"
                            size="sm"
                            className="item-button"
                            disabled = { isDeleteInProgress || isUpdateInProgress }
                            onClick = { this.handleEditClick }
                        >
                            { !isEditMode && <i className="fa fa-edit"></i>}
                            { isEditMode && <i className="fa fa-save"></i>}
                        </Button>
                    </div>
                </div>
                <div className="card-item-body">
                    {
                        (isDeleteInProgress || isUpdateInProgress) && (
                            <div className="d-flex align-items-center justify-content-center h-218">
                                <Loader 
                                    type="Bars"
                                    color="#00BFFF"
                                    height="50"	
                                    width="50"
                                />
                            </div>
                        )
                    }
                    {
                        (!isDeleteInProgress && !isUpdateInProgress) && (
                            <>
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
                                    {
                                        isEditMode && (
                                            <input type="text" ref={this.unitsInputElm} defaultValue={units} className="units-inputbox"/>
                                        )
                                    }
                                    {
                                        !isEditMode && <div className="field-value">{ units }</div>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" className="mb-2">
                                    <div className="field-label">Description</div>
                                    <div className="field-value">{ description }</div>
                                </Col>
                            </Row>
                            </>
                        )
                    }
                    
                </div>
            </div>
        );
    }
}
