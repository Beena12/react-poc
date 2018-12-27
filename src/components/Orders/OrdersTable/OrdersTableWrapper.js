import React, {Component} from 'react';
import { connect } from "react-redux";

import Select from './../../common/Dropdown/DropDown';
import OrdersTable from "./OrdersTable";

import { sortingOptions } from "./staticData";
import { MIN_TABLE_HEIGHT } from "./../../../constants";
import { changeOrdersSorting } from "./../../../actionCreators/order";

import  './ordersTable.scss';

class OrdersTableWrapper extends Component {
    state = {
        tableHeight: 0,
        tableWidth: 0
    }

    ordersTableElmRef = React.createRef();

    componentDidMount() {
        this.setTableDimension();
        window.addEventListener("resize", this.setTableDimension );
    }

    componentDidUpdate() {
        this.setTableDimension();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setTableDimension );
    }

    setTableDimension = () => {
        const { tableHeight, tableWidth } = this.state;
        const tableDimension = this.getTableDimension( this.ordersTableElmRef.current );
        if( tableDimension.tableHeight !== tableHeight || tableDimension.tableWidth !== tableWidth ) {
            this.setState( tableDimension );
        }
    }

    getTableDimension = ( tableElm ) => {
        //Height Calculation
        const windowHeight = window.innerHeight;
        const minHeight = MIN_TABLE_HEIGHT;
        let height = 0;
        
        const tableBodyOffsetTop = tableElm.offsetTop;
        const headerHeight = document.querySelector('.main-panel .header').offsetHeight;
        
        height = windowHeight - tableBodyOffsetTop - headerHeight;
        const tableHeight = height >= minHeight ? height : minHeight;
        
        //Width Calculation
        const mainPanelWidth = document.querySelector('.main-panel').offsetWidth;
        const lineItemsPanel = document.querySelector('.main-panel .line-items-wrapper');
        const lineItemsPanelWidth = (lineItemsPanel && lineItemsPanel.scrollWidth) || 0;
        const tableWidth = mainPanelWidth - lineItemsPanelWidth;
        
        return {
            tableHeight,
            tableWidth
        };
    }

    handleSortDropdownChange = ( selectedOption ) => {
        this.props.changeOrdersSorting( selectedOption );
    }

    render() {
        const { tableHeight, tableWidth } = this.state;
        const { orderBy } = this.props;
        return (
            <div className="orders-table-wrapper">
                <div className="sort-section">
                    <div>Sort By</div>
                    <div className="sort-dropdown">
                        <Select options = {sortingOptions}
                            selected = { orderBy }
                            onChange = { this.handleSortDropdownChange }
                        />
                    </div>
                </div>
                <div className="orders-table" ref = {this.ordersTableElmRef}>
                    <OrdersTable height = {tableHeight} width = {tableWidth}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    orderBy: state.order.currentOrderBy,
    showLineItemsPanel: state.order.showLineItemsPanel
});

const mapDispatchToProps = ( dispatch ) => ({
    changeOrdersSorting: (selectedOption) => dispatch(changeOrdersSorting(selectedOption)) 
})

export default connect( mapStateToProps, mapDispatchToProps )( OrdersTableWrapper );