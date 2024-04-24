import React, { useState } from 'react'
import StoryView from './StoryView';
import {useDispatch} from "react-redux"
import { fetchStory, updateStory } from '../../redux/StorySlice/storySlice';

const StoryCard = ({ oneStory, index }) => {
    const [open, setOpen] = useState(false);
    const dispatch=useDispatch()

    return (
        <><div className={`story-card ${!oneStory.attributes.isOpen ? "open" : ""}`} onClick={() => {
            setOpen(true);
            dispatch(updateStory({id:oneStory?.id})).then(()=>dispatch(fetchStory()))
        }}>
            <img src={"http://localhost:1337"+oneStory.attributes.img.data.attributes.url} alt="" />
            <h5>{oneStory.attributes.userName}</h5>
        </div>
            {open && <StoryView oneStory={oneStory} setOpen={setOpen} />}
        </>
    )
}

export default StoryCard