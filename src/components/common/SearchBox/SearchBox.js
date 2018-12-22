import React, { Component } from 'react';
import {
	InputGroup,
	InputGroupAddon,
	Input,
	Button,
} from 'reactstrap';

export default class SearchBox extends Component {
	state = {
		searchValue : ''
	}

	handleSearchInputChange = ( e ) => {
		this.setState({
			searchValue: e.target.value
		});
	}

	handleSearchClick = () => {
		const searchValue = this.state.searchValue;
		this.props.onSearchClick( searchValue );
	}
	
	render() {
		const { searchValue } = this.state;
		const { allowEmptySearch } = this.props;
		const searchDisabled = !allowEmptySearch && !searchValue;
		
		return(
			<InputGroup className="h-100">
				<Input className="h-100" color="secondary" placeholder="Search..." value={ searchValue } onChange={ this.handleSearchInputChange }/>
				<InputGroupAddon addonType="append">
					<Button color="primary" onClick={ this.handleSearchClick } disabled = {searchDisabled}>
						<i className="fa fa-search icon-white"></i>
					</Button>
				</InputGroupAddon>
			</InputGroup>
		);
	}
}