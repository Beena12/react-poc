import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

const dropdownOptionPropType = PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
});

export default class Select extends Component {
    static propTypes = {
        onChange : PropTypes.func.isRequired,
        options  : PropTypes.arrayOf( dropdownOptionPropType ).isRequired,
        selected : dropdownOptionPropType.isRequired
    };
    
    state = {
        isOpen: false
    }

    toggleDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = ( e ) => {
        const { options, onChange } = this.props;
        const selectedOption = options.filter( option => option.value === e.target.value )[0];
        onChange( selectedOption );
    }

    render() {
        const { options, selected } = this.props;
        const { isOpen } = this.state;
        return (
            <Dropdown isOpen={isOpen} toggle={this.toggleDropdown}>
                <DropdownToggle caret block>
                    { selected.text }
                </DropdownToggle>
                <DropdownMenu>
                    {
                        options.map( option => (
                            <DropdownItem key={option.value} value={option.value} onClick={this.handleChange}>
                                { option.text }
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
    
}
