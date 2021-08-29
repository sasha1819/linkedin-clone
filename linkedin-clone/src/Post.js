import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from './InputOption';
// import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";



function Post({name, description, massage, photoUrl }) {
    return( <div className="post">
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{massage}</p>
        </div>
        
        <div className="Post__buttons">
            <InputOption Icon ={ThumbUpAltOutLinedIcon } title ="Like"
            color="gray"/>
            <InputOption Icon ={ChatOutlinedIcon} title ="Comment"
            color="gray"/> 
            <InputOption Icon ={ShareOutLinedIcon} title ="Share"
            color="gray"/>
            <InputOption Icon ={SendOutLinedIcon} title ="Send"
            color="gray"/>
        </div>
    </div>
    );
}

export default Post ;
