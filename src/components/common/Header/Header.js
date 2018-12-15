import React from 'react';
import UserAvatar from 'react-user-avatar';
import './header.scss';

import SearchBox from '../SearchBox/SearchBox';

export default function Header() {
    return (
        <div className="header">
            <div className="customer-title">
                Customer Lookup
            </div>

            <div className="searchbox-container">
                <SearchBox/>
            </div>
            <div className="avatar-container">
                <UserAvatar 
                    size="50" 
                    name="Dan Abramov" 
                    src="https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_bigger.jpg"
                />
            </div>
        </div>
    );
}