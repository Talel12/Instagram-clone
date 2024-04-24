import React from 'react'

const PostOwner = ({user}) => {
  return (
    <div className='post-owner'>
        <img src={`${process.env.REACT_APP_API_Media}${user?.attributes?.profilePic?.data?.attributes?.url}`} alt="" />
        <h2>{user?.attributes?.full_name}</h2>
    </div>
  )
}

export default PostOwner