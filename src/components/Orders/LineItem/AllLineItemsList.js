import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col } from 'reactstrap';

import SearchBox from "./../../common/SearchBox/SearchBox";


class AllLineItemsList extends Component {
    state = {
        selectedLineItemId : null
    }

    handleItemSelection = ( lineItemId ) => {
        this.setState({
            selectedLineItemId: lineItemId
        });
    }

    render() {
        const { allLineItemList } = this.props;
        const { selectedLineItemId } = this.state;
        return (
            <>
                <SearchBox/>
                <div className="line-items-list mt-3">
                    {
                        allLineItemList.map( lineItem => (
                            <div className="mb-3" key={ lineItem.id }>
                                <Row noGutters={true}>
                                    <Col sm="1"></Col>
                                    <Col sm="4"  className="field-label">Item Name</Col>
                                    <Col sm="7"  className="field-label">Description</Col>
                                </Row>
                                <Row noGutters={true}>
                                    <Col sm="1" className="pl-2">
                                        <input type="radio"
                                            checked={ lineItem.id === selectedLineItemId } 
                                            onChange={() => this.handleItemSelection( lineItem.id ) }
                                        />
                                    </Col>
                                    <Col sm="4" className="field-value">{ lineItem.name }</Col>
                                    <Col sm="7" className="field-value">{ lineItem.description }</Col>
                                </Row>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = ( state ) => ({
    allLineItemList: state.lineItem.lineItemList
});

export default connect( mapStateToProps, null )( AllLineItemsList );