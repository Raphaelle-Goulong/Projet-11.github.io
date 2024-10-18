import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import postReducer from './post.reducer'
import authReducer from './auth.reducer'


export default combineReducers({
    // Reducers
    userReducer,
    postReducer,
    authReducer
    

    
})