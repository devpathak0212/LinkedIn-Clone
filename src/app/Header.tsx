import React from 'react';
import './Header.css'
import HeaderOption from './HeaderOption.js';

export default function Header(){
    return(
        <div className='header'>
            <div className='header_left'>
                <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt="image"></img>
                <div className="header_search">
                    <input type="text" placeholder='search'/>
                </div>
            </div>
            <div className='header_right'>
            <HeaderOption title="Home"/>
            <HeaderOption title="My Network"/>
            <HeaderOption title="Jobs"/>
            <HeaderOption title="Messaging"/>
            <HeaderOption title="Notifications"/>
            <HeaderOption title="About Me"/>
            </div>
        </div>
    )
}