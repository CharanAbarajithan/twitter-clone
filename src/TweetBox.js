import { Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css"
import {Avatar} from "@mui/material"

const Tweetbox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;

