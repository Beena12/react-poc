import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Row, Col } from 'reactstrap';

import SearchBox from "../../common/SearchBox/SearchBox";

import InfiniteScrollList from "./../../common/List/InfiniteScrollList";
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import { fetchMasterLineItems, fetchMoreMasterLineItems } from "../../../actionCreators/lineItem";

import { DEFAULT_PAGE_SIZE } from "./../../../constants";


class MasterLineItemsList extends Component {
    state = {
        searchValue: ''
    };

    cache = new CellMeasurerCache({
        fixedWidth: true
    });

    handleLineItemSearch = ( searchValue ) => {
        this.setState({
            searchValue: searchValue
        });
        const reqData = {
            searchValue: searchValue,
            page: 0,
            count: DEFAULT_PAGE_SIZE
        };
        this.props.fetchMasterLineItems( reqData );
    }

    loadMoreLineItems = ( startIndex, stopIndex ) => {
        const { fetchMoreMasterLineItems } = this.props;
        const page = startIndex === 0 ? 0 : startIndex/DEFAULT_PAGE_SIZE;
        const orderReqObj = {
            searchValue: this.state.searchValue,
            count: DEFAULT_PAGE_SIZE,
            page: page
        };

        return fetchMoreMasterLineItems( orderReqObj );
    }

    renderRow = ({ index, key, style, parent }, selectedLineItemId) => {
        const { masterLineItemList, onItemSelect } = this.props;
        const lineItem = masterLineItemList[ index ];
        return (
            <CellMeasurer 
                key={key}
                cache={this.cache}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >
                <div style={style} className="pb-4" key={ key } onClick={(e) => onItemSelect( e, lineItem._id ) }>
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
            </CellMeasurer>
        );
    }

    render() {
        const { masterLineItemList, isLoading, totalRowCount, selectedLineItemId } = this.props;
        return (
            <div className="master-item-list-container">
                <div className="master-line-item-searchbox-container">
                    <SearchBox onSearchClick = { this.handleLineItemSearch } allowEmptySearch = {true}/>
                </div>
                <div className="master-line-items-list">
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
                            <InfiniteScrollList
                                list = { masterLineItemList }
                                totalRowCount = {totalRowCount}
                                selectedRow = {selectedLineItemId}

                                rowRenderer = { this.renderRow }
                                loadMoreRows = { this.loadMoreLineItems }
                                
                                deferredMeasurementCache={this.cache}
                                rowHeight={this.cache.rowHeight}
                                className = "pt-3"
                            />
                        )
                    }
                </div>
            </div>           
        );
    }
}

const mapStateToProps = ( state ) => ({
    masterLineItemList: state.lineItem.lineItemList,
    totalRowCount: state.lineItem.totalItemsCount,
    isLoading: state.lineItem.isLineItemListLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchMasterLineItems: ( reqData ) => dispatch( fetchMasterLineItems( reqData ) ),
    fetchMoreMasterLineItems: ( reqData ) => dispatch( fetchMoreMasterLineItems( reqData ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( MasterLineItemsList );