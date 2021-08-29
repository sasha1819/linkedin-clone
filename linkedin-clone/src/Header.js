import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from
'@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/>

                <div className="header__search">
                    <SearchIcon/> 
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork"/>
                 <HeaderOption Icon={BusinessCenterIcon} title ="Jobs"/>
                 <HeaderOption Icon={MessageIcon} title ="Messaging"/>
                 <HeaderOption Icon={NotificationsIcon} title ="Notifications"/>
                 <HeaderOption avatar ="https://media-exp1.licdn.com/dms/image/C4D03AQECwtrzajlkYQ/profile-displayphoto-shrink_100_100/0/1589190873134?e=1635379200v=betat=p2DafUFfjkd82G3LL0LsROKqi8gPZwDYhe4MCiWGsNg" title ="me"/>
            </div>
        </div>
    )
}

export default Header
