import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState = {
    success: false,
    user: '',
    token: '',
    loading: false,
    error: ''

}

export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
    const res = await fetch('http://localhost:8000/api/users/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

export const signInUser = createAsyncThunk('signInUser', async (body) => {

    return await fetch('http://localhost:8000/api/users/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) => {
            console.log('remove');
            state.token = null;
            Cookies.remove("user")
            Cookies.remove("userName")
            Cookies.remove("userId")

        }
    },
    extraReducers: {
        [signInUser.pending]: (state, action) => {
            console.log(state.loading);
            state.loading = true
        },
        [signInUser.fulfilled]: (state, { payload }) => {
            
            state.error = payload.message;
            if (state.error) {
                return
            } else {
                state.token = payload.token;
                state.user = payload.user;
                state.success = payload.success;
                Cookies.set('user', payload.user);
                Cookies.set("userName", payload.user.firstName);
                Cookies.set("userId", payload.user._id);
            }
                                   
                },
        [signInUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
           
        },
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, {   payload  }) => {
            
            state.loading = false;
            state.user=payload
         
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export const { addToken, addUser, logout } = userSlice.actions;

export default userSlice.reducer