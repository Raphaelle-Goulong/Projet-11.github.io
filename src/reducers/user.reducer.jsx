const initialState = {
    token: null,
    isAuthenticated: false,
    userInfo: {},
    loading: false,
    error: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                userInfo: {},
            };
        case 'GET_USER_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'GET_USER':
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_USER_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}


// const initialState = {}

// export default function userReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_USER:
//             return action.payload
//         default:
//             return state
//     }
// }

// const initialState = {
//     token: null,
//     isAuthenticated: false,
//     userInfo: {},
//     loading: false,
//     error: null,
// };

// export default function userReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'LOGIN_SUCCESS':
//             return {
//                 ...state,
//                 token: action.payload,
//                 isAuthenticated: true,
//             };
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 token: null,
//                 isAuthenticated: false,
//                 userInfo: {},
//             };
//         case 'GET_USER_LOADING':
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case 'GET_USER':
//             return {
//                 ...state,
//                 userInfo: action.payload,
//                 loading: false,
//                 error: null,
//             };
//         case 'GET_USER_ERROR':
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// }
