import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Row, Col } from 'reactstrap';

import SearchBox from "../../common/SearchBox/SearchBox";
import { fetchMasterLineItems } from "../../../actionCreators/lineItem";


class MasterLineItemsList extends Component {
    handleLineItemSearch = ( searchValue ) => {
        this.props.fetchMasterLineItems( searchValue );
    }

    componentDidMount() {
        this.props.fetchMasterLineItems();
    }

    render() {
        const { masterLineItemList, isLoading, onItemSelect, selectedLineItemId } = this.props;
        return (
            <>
            {
                isLoading && (
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <Loader 
                            type="Bars"
                            color="#00BFFF"
                            height="100"	
                            width="100"
                        />
                    </div>
                )
            }
            {
                !isLoading && (
                    <>
                        <div className="line-item-searchbox-container">
                            <SearchBox onSearchClick = { this.handleLineItemSearch }/>
                        </div>
                        <div className="line-items-list mt-3">
                            {
                                masterLineItemList.map( lineItem => (
                                    <div className="mb-3" key={ lineItem._id } onClick={(e) => onItemSelect( e, lineItem._id ) }>
                                        <Row noGutters={true}>
                                            <Col sm="1"></Col>
                                            <Col sm="4"  className="field-label">Item Name</Col>
                                            <Col sm="7"  className="field-label">Description</Col>
                                        </Row>
                                        <Row noGutters={true}>
                                            <Col sm="1" className="pl-2">
                                                <input type="radio"
                                                    checked={ lineItem._id === selectedLineItemId } 
                                                    onChange={(e) => onItemSelect( e, lineItem._id ) }
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
                )
            }
            </>
        );
    }
}

const mapStateToProps = ( state ) => ({
    masterLineItemList: state.lineItem.lineItemList,
    isLoading: state.lineItem.isLineItemListLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchMasterLineItems: ( searchValue ) => dispatch( fetchMasterLineItems( searchValue ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( MasterLineItemsList );