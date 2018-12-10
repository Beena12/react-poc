import React from 'react';
import UserAvatar from 'react-user-avatar';
import './header.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="customer-name">

            </div>
            <div className="searchbox-container">

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