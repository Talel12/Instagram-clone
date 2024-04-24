import React from 'react'
import "./feed.css"
import StoryList from '../../Components/Story/StoryList'
import PostList from '../../Components/Post/PostList.component'

const Feed = () => {
  return (
    <div className='feed-container'>
      <StoryList/>
      <PostList/>
    </div>
  )
}

export default Feed