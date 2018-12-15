import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
 } from 'reactstrap';

export default class SearchBox extends Component {

	constructor(props) {
		super(props);

	}
	render() {
		return(
			<div>
		      	<InputGroup>
		          <Input color="secondary" placeholder="Search..."/>
		          <InputGroupAddon addonType="append">
			          <Button color="primary">
			          <i className="fa fa-search icon-white"></i>
			          </Button>
		          </InputGroupAddon>
		        </InputGroup>
        	</div>
			);
	}
}