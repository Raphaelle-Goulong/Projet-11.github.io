const initialState = {
    token: null,
    isAuthenticated: false,
    userInfo: {},
    loading: false,
    error: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                loading: false,
                userInfo: action.payload.userInfo
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                userInfo: {}
            }
        case 'GET_USER_LOADING':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'GET_USER':
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
                error: null
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CHECK_AUTH':
            return {
                ...state,
                isAuthenticated: action.payload // Met à jour selon le résultat de l'authentification
            }

        case 'UPDATE_USER_NAME_SUCCESS':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userName: action.payload.userName
                },
                loading: false,
                error: null
            }
        case 'UPDATE_USER_NAME_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}
