import React from "react"
import "./Feed.css"
import TweetInput from "../TweetInput/TweetInput"
import MainPost from "../MainPost/MainPost"
const Feed=()=>{
    return (
        <>
        <div className="Feed">
            <div className="FeedHeader">
                <h3>Home</h3>
            </div>
        <TweetInput/>
        <MainPost/>
        </div>
        </>
    )
}
export default Feed;