import { Avatar , Button} from '@mui/material'
import React from 'react'
import "./TweetInput.css"

const TweetInput = () => {
  return (
   <div className="TweetBox">
    <form >
        <div className="TweetInputBox">
            <Avatar src="/src/assets/1.jpg"/>
            <input type="text" placeholder="What's Happening?"/>
        </div>
        <input type="text" className='TweetInputTextForImage' placeholder="Optional : Enter Image URL"/>
        <Button type='submit'  className='TweetBoxBtn'>Tweet</Button>
    </form>
   </div>
  )
}

export default TweetInput