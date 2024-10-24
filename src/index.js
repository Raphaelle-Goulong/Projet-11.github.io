import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/pages/App'
import reportWebVitals from './reportWebVitals'

//Redux
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'


// Importer l'action `getPosts`
import { getPosts } from './actions/post.action';
import { getUser } from './actions/user.action';
import { getAuth } from './actions/auth.action';

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})




store.dispatch(getPosts())
store.dispatch(getUser())
store.dispatch(getAuth())




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
