import React from 'react';
import {
	InputGroup,
	InputGroupAddon,
	Input,
	Button,
} from 'reactstrap';

export default function SearchBox( props ) {
	const searchInputElm = React.createRef();
	
	function handleSearchClick() {
		const searchValue = searchInputElm.current.value;
		props.onSearchClick( searchValue );
	}
	
	return(
		<InputGroup className="h-100">
			<Input className="h-100" color="secondary" placeholder="Search..." innerRef={searchInputElm}/>
			<InputGroupAddon addonType="append">
				<Button color="primary" onClick={ handleSearchClick }>
					<i className="fa fa-search icon-white"></i>
				</Button>
			</InputGroupAddon>
		</InputGroup>
	);
}