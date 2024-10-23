import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        isAuthenticated: false,
        userInfo: {},
        loading: false,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.userInfo = {};
        },
        getUserLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        getUser: (state, action) => {
            state.userInfo = action.payload;
            state.loading = false;
            state.error = null;
        },
        getUserError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, logout, getUserLoading, getUser, getUserError } = userSlice.actions;

export default userSlice.reducer;
