import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    currentUser: null,
    loading: false,
    errors: null
}

export const login = createAsyncThunk(
    'users/LoginUser',
    async (data) => {
        const response = await axios.post(`${process.env.REACT_APP_API}auth/local`, data)
        localStorage.setItem("token", response.data.jwt)
        window.location.replace("/")
        return response.data
    },
)


export const getCurrentUser = createAsyncThunk(
    'users/currentUser',
    async () => {
        try {
            const jwt = localStorage.getItem("token");
            const response = await axios.get(
                `${process.env.REACT_APP_API}users/me`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("current user error:", error);
            throw error;
        }
    })


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.currentUser = action.payload.user
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.errors = action.error
        });
        builder.addCase(getCurrentUser.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload
        });
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.loading = false
            state.errors = action.error
        });
    },

    reducers: {
        logout: (state)=>{
           localStorage.removeItem('token')
           window.location.reload()
        },
    },
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer