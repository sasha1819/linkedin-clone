import React from 'react';
import './Feed.css';
import CreateIcone from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcone />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                        <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
                        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                        <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                        <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            <Post name="Alexander Pochtarenko" description="This is a test" massage="WOW This work"/>
        </div>
    );
}

export default Feed;
