import React, {Component} from 'react';
import { connect } from "react-redux";

import VirtualTable from "./../../common/Table/VirtualTable";

import { ordersTableColumns } from "./staticData";


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
    }
    
    render() {
        const { height, width, orders } = this.props;
        const { selectedRowIndex } = this.state;

        return (
            <VirtualTable
                columns = { ordersTableColumns }
                data = { orders }
                width = { width }
                height = { height }
                noRowsRenderer = { this.noRowsRenderer }
                headerRowClass = "order-table-header"
                evenRowClass = "order-table-even-row"
                selectedRowClass = "order-table-selected-row"
                selectedRowIndex = { selectedRowIndex }
                onRowClick = { this.handleRowClick }
            />
        );
    }
}

const mapStateToProps = ( state ) => ({
    orders: state.order.orderList
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )( OrdersTable );