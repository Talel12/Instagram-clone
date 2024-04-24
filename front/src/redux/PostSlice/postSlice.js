import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { posts: [], loading: false };

export const fetchPosts = createAsyncThunk("users/getAllPosts", async () => {
  const jwt = localStorage.getItem("token");
  const response = await axios.get(
    `${process.env.REACT_APP_API}posts?populate=deep&sort=createdAt:desc`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  return response.data;
});

export const uploadImage = createAsyncThunk(
  "users/uploadImage",
  async (formData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}upload`,
      formData
    );

    return response;
  }
);

export const addPost = createAsyncThunk(
  "users/addPost",
  async ({ media, text, user_profile }) => {
    const jwt = localStorage.getItem("token");
    axios.post(
      `${process.env.REACT_APP_API}posts`,
      {
        data: {
          media: media,
          text: text,
          user_profile: user_profile,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(uploadImage.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(addPost.fulfilled, (state) => {
        state.loading = false;
      });
      builder.addCase(addPost.rejected, (state) => {
        state.loading = false;
      });
      builder.addCase(uploadImage.rejected, (state) => {
        state.loading = false;
      });
  },

  reducers: {
    // updateStory: (state,action)=>{
    //     console.log(action)
    //    return state.map((el,i)=> i===action.payload.index ? {...el,isOpen:true} : el)
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { updateStory } = storySlice.actions

export default postSlice.reducer;
