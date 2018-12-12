import React, {Component} from 'react';

import Select from './../../common/Dropdown/DropDown';

import { sortingOptions } from './staticData';
import  './ordersTable.scss';

export default class OrdersTableWrapper extends Component {
    state = {
        orderBy: sortingOptions[0]
    }

    handleSortDropdownChange = ( selectedOption ) => {
        this.setState({
            orderBy: selectedOption
        });
    }

    render() {
        const { orderBy } = this.state;
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

            </div>
        );
    }
}