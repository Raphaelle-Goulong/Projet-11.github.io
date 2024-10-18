import { GET_AUTH } from "../actions/auth.action";

const initialState = { }

export default function authReducer( state = initialState, action){
    switch (action.type){
        case GET_AUTH:
            return action.payload;
        default:
            return state;
    }

}