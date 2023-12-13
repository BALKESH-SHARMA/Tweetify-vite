import React from 'react'
import "./MainPost.css"
import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat'
import PublishIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteBorderIcon from '@mui/icons-material/Publish'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const MainPost = () => {
  return (
    <div className="MainPost">
      <div className="PostAvatar">
        <Avatar src="/src/assets/1.jpg" />
      </div>
      <div className="PostBody">
        <div className="PostHeader">
          <div className="PostHeadreText">
            <h4>Random Name <span className='PostHeaderUserName'>
              <VerifiedUserIcon className="VerfiedIconPost" />
              @anonymous</span>{"  "}
            </h4>
          </div>
          <div className="PostHeaderDescription">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif" alt="" />
        <div className="PostFooter">
          <ChatBubbleOutlineIcon />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  )
}

export default MainPost