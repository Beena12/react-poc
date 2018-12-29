import React, {Component} from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import InfinteScrollTable from "../../common/Table/InfiniteScrollTable";

import { fetchOrderLineItems, fetchMoreOrderList } from "./../../../actionCreators/order";

import { ordersTableColumns } from "./staticData";

import { DEFAULT_PAGE_SIZE } from "./../../../constants";

class OrdersTable extends Component {
    state = {
        selectedRowIndex : -10
    }

    noRowsRenderer = () => {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                No Orders Found.
            </div>
        );
    }

    handleRowClick = ({e, index, rowData}) => {
        this.setState({
            selectedRowIndex: index
        });
        this.props.fetchOrderLineItems( rowData._id );
    }

    loadMoreOrders = ( startIndex, stopIndex ) => {
        const { currentCustomerId, currentOrderBy, fetchMoreOrderList} = this.props;
        const page = startIndex === 0 ? 0 : startIndex/DEFAULT_PAGE_SIZE;
        const orderReqObj = {
            customerId: currentCustomerId,
            sortBy: currentOrderBy.value,
            count: DEFAULT_PAGE_SIZE,
            page: page
        };

        return fetchMoreOrderList( orderReqObj );
    }
    
    render() {
        const { height, width, orders, totalRowCount, isOrderListLoading } = this.props;
        const { selectedRowIndex } = this.state;
    
        return (
            <>
            {
                isOrderListLoading && (
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <Loader 
                            type="Grid"
                            color="#00BFFF"
                            height="50"	
                            width="50"
                        />
                    </div>
                )
            }
            {
                !isOrderListLoading && (
                    <InfinteScrollTable
                        columns = { ordersTableColumns }
                        data = { orders }
                        totalRowCount = {totalRowCount}
                        width = { width }
                        height = { height }
                        noRowsRenderer = { this.noRowsRenderer }
                        headerRowClass = "order-table-header"
                        evenRowClass = "order-table-even-row"
                        selectedRowClass = "order-table-selected-row"
                        selectedRowIndex = { selectedRowIndex }
                        onRowClick = { this.handleRowClick }
                        loadMoreRows = { this.loadMoreOrders }
                    />
                )
            }
            </>
        );
    }
}

const mapStateToProps = ( state ) => ({
    orders: state.order.orderList,
    totalRowCount: state.order.totalRowCount,
    currentCustomerId: state.header.customerId,
    currentOrderBy: state.order.currentOrderBy,
    isOrderListLoading: state.order.isOrderListLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchMoreOrderList: ( reqData ) => dispatch( fetchMoreOrderList( reqData )),
    fetchOrderLineItems: ( reqData ) => dispatch( fetchOrderLineItems( reqData ))
});

export default connect( mapStateToProps, mapDispatchToProps )( OrdersTable );