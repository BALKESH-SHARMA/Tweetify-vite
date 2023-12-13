import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./widgets.css"
import {TwitterTimelineEmbed,TwitterTweetEmbed} from "react-twitter-embed"
const Widgets = () => {
    return (
        <div className="Widgets">
            <div className="WidgetsInput">
                <SearchIcon className='WidgetSearchIcon' />
                <input type="text" placeholder='Search On twitter' className='' />
                
            </div>
            <div className="WidgetMainController">
                    <h3>What's Happening</h3>
                    <TwitterTweetEmbed tweetId='1710937372035346586'/>
                    <TwitterTimelineEmbed screenName="imVkohli" sourceType="profile" options={{height:450}}/>
                </div>
        </div>
    )
}

export default Widgets