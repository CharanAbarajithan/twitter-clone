import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {

    return (
        <div className="feed">
            {/* {HEADER} */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* {TWEET BOX} */}

            <TweetBox />

            {/* {POSTS} */}
            <Post 
            displayName="Charan Abarajithan"
            username="Charan19"
            verified={true}
            text="Building a Twitter clone with ReactJS!!!!!"
            avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
            image="https://c.tenor.com/NII7Z9YQLsMAAAAC/go-for-it-you-can-do-it.gif"
            />

        </div>
    );
}

export default Feed;
