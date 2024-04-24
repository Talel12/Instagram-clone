import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {story:[ ],loading: false}

export const fetchStory = createAsyncThunk(
    'users/getAllStory',
    async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}stories?populate=deep`)
      return response.data
    },
  )

  export const updateStory = createAsyncThunk(
    'users/updateStory',
    async ({id}) => {
      const response = await axios.put(`${process.env.REACT_APP_API}stories/${id}`,{data:{isOpen:true}})
      return response.data
    },
  )


export const storySlice = createSlice({
  name: 'story',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStory.pending, (state, action) => {
        state.loading=true
      });
    builder.addCase(fetchStory.fulfilled, (state, action) => {
      state.loading=false;
      state.story=action.payload.data
    });
    builder.addCase(fetchStory.rejected, (state, action) => {
        state.loading=false
      });
},

  reducers: {
    // updateStory: (state,action)=>{
    //     console.log(action)
    //    return state.map((el,i)=> i===action.payload.index ? {...el,isOpen:true} : el)
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { updateStory } = storySlice.actions

export default storySlice.reducer