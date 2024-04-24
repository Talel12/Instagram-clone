import React from 'react'
import {useSelector} from "react-redux"
import PostCard from './PostCard.component'
import "./post.css"

const PostList= () => {
    const posts=useSelector(store=>store?.posts?.posts)    
  return (
    <div className='post-list'>
        {posts.map(post=><PostCard key={post?.id} post={post}/>)}
    </div>
  )
}

export default PostList