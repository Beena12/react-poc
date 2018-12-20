import React from 'react';
import UserAvatar from 'react-user-avatar';
import './header.scss';

import SearchBox from '../SearchBox/SearchBox';

import { connect } from "react-redux";
import { fetchCustomer } from "./../../../actionCreators/customer";


function Header(props) {
    
    function handleCustomerSearchClick( searchVal ) {
        props.fetchCustomer( searchVal );   
    }

        return (
            <div className="header">
                <div className="customer-section">
                        <div className="customer-title"> Customer Lookup </div>
                        <div className="customer-name"> Customer name : </div>
                </div>
                <div className="avatar-container">
                    <UserAvatar 
                        size="50" 
                        name="Dan Abramov" 
                        src="https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_bigger.jpg"
                    />
                </div>
                <div className="searchbox-container">
                    <SearchBox onSearchClick = {handleCustomerSearchClick}/>
                </div>
                
            </div>
        );        
}

const mapStateToProps = ( state ) => ({
    customer_name: state.customer_name
});

const mapDispatchToProps = ( dispatch ) => ({    
         fetchCustomer: ( reqData ) => dispatch( fetchCustomer(reqData) )     
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );