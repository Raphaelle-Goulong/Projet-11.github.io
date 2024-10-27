import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
    userInfo: {},
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.userInfo = action.payload.userInfo;
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
        checkAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        updateUserNameSuccess: (state, action) => {
            state.userInfo = {
                ...state.userInfo,
                userName: action.payload.userName
            };
            state.loading = false;
            state.error = null;
        },
        updateUserNameError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    loginSuccess,
    logout,
    getUserLoading,
    getUser,
    getUserError,
    checkAuth,
    updateUserNameSuccess,
    updateUserNameError
} = userSlice.actions;

export default userSlice.reducer;