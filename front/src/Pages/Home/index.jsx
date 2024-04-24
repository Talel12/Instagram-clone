import React, { useEffect } from 'react'
import Navbar from '../../Layouts/Navbar'
import Feed from '../../Layouts/Feed'
import Suggestion from '../../Layouts/Suggestion'
import "./home.css"
import { fetchStory } from '../../redux/StorySlice/storySlice'
import {useDispatch} from "react-redux"
import { fetchPosts } from '../../redux/PostSlice/postSlice'

const Home = () => {

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchStory())
    dispatch(fetchPosts())
  }, []);

  return (
    <div className='home-container'>
        {/* <Navbar/> */}
        <Feed/>
        <Suggestion/>
    </div>
  )
}

export default Home