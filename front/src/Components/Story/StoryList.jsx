import React, { useRef, useState } from 'react'
import "./story.css"
import StoryCard from './StoryCard'
import { useSelector, useDispatch } from 'react-redux'

const StoryList = () => {

    const story=useSelector( store=>store?.story.story)

    const ref = useRef()

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
        <div style={{position:"relative"}}>
            <button id="right" onClick={() => scroll(200)}>{`>`}</button>
            <button id="left" onClick={() => scroll(-200)}>{`<`}</button>
            <div ref={ref} className='Story-list-container'>
            {story?.map((oneStory,i) => <StoryCard key={i} oneStory={oneStory} story={story}  index={i}/>)}
                
              
            </div></div>

    )
}

export default StoryList