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
                    name="User Name" 
                    src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"
                />
            </div>
        </div>
    );
}