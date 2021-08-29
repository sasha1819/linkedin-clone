import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

            const recentItem = (topic) =>(
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>{topic}</p>
                </div>
            );

    return (
        <div className ="sidebar">
            <div className="sidebar__top">
                <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600ssl=1" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Alexnder Pochtarenko</h2>
                <h4>sashaa1819@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,376</p>
                        
                    
                </div>
                <div className="sidebar__stat">
                    <p>Viewed on post</p>
                    <p className="sidebar__statNumber">2,555</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("desgin")}
                {recentItem("developer")}


                
            </div>
        </div>
    )
}

export default Sidebar
