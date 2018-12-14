import React, {Component} from 'react';
import { connect } from "react-redux";

import VirtualTable from "./../../common/Table/VirtualTable";

import { ordersTableColumns } from "./staticData";


class OrdersTable extends Component {
    noRowsRenderer = () => {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                No Orders Found.
            </div>
        );
    }
    
    render() {
        const { height, width, orders } = this.props;
        return (
            <VirtualTable
                columns = { ordersTableColumns }
                data = { orders }
                width = { width }
                height = { height }
                noRowsRenderer = { this.noRowsRenderer }
                headerRowClass = "order-table-header"
                evenRowClass = "order-table-even-row"
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