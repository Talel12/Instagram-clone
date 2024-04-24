import React from 'react'
import { CgAddR } from 'react-icons/cg'
import { GoHomeFill } from 'react-icons/go'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RxAvatar } from 'react-icons/rx'

const PostActions = () => {
    return (
        <div className='post-actions-container'>
            <div>
                <IoIosHeartEmpty />
                <GoHomeFill />
                <CgAddR />
            </div>
            <div>
                <RxAvatar />
            </div>
        </div>
    )
}

export default PostActions