import React from 'react'
import PostOwner from './PostOwner.compoent'
import PostActions from './PostActions.component'

const PostCard = ({post}) => {
  return (
    <div className='post-card-container'>
        <PostOwner user={post?.attributes?.user_profile?.data}/>
        <img src={`${process.env.REACT_APP_API_Media}${post?.attributes?.media?.data?.attributes?.url}`} alt="" />
        <PostActions/>
        <p>{post?.attributes?.text}</p></div>
  )
}

export default PostCard