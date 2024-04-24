import { configureStore } from '@reduxjs/toolkit'
import storySlice from './StorySlice/storySlice'
import authSlice from './AuthSlice/authSlice'
import postSlice from './PostSlice/postSlice'

export const store = configureStore({
    reducer: {
        story: storySlice,
        auth: authSlice,
        posts: postSlice
    },
})