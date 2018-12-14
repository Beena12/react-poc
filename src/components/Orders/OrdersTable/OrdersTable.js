import React, {Component} from 'react';
import VirtualTable from "./../../common/Table/VirtualTable";

import { ordersTableColumns } from "./staticData";


export default class OrdersTable extends Component {
    noRowsRenderer = () => {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                No Orders Found.
            </div>
        );
    }
    
    render() {
        const { height, width } = this.props;
        return (
            <VirtualTable
                columns = { ordersTableColumns }
                data = {[]}
                width = { width }
                height = { height }
                noRowsRenderer = { this.noRowsRenderer }
            />
        );
    }
}