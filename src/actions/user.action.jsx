import axios from "axios";

// Définir les actions pour récupérer les informations utilisateur
export const GET_USER = "GET_USER";
export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const LOGOUT = "LOGOUT";

export const getUser = () => {
   return (dispatch) => {
        // Indiquer que le chargement commence
        dispatch({ type: GET_USER_LOADING });

        // Récupérer le token stocké dans localStorage
        const token = localStorage.getItem('token');

        // Si le token est absent, on peut gérer cette erreur avant de faire la requête
        if (!token) {
            dispatch({ type: GET_USER_ERROR, payload: "Token manquant" });
            return;
        }

        // Faire la requête GET en ajoutant le token dans l'en-tête Authorization
        return axios.get("http://localhost:3001/api/v1/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`, // On ajoute le token ici
            },
        })
        .then((res) => {
            console.log(res); // Log de la réponse de l'API pour vérifier
            // Vérifie que la structure est correcte et envoie les données
            dispatch({ type: GET_USER, payload: res.data.body });
        })
        .catch((err) => {
            console.error("Erreur : ", err.response); // Gérer les erreurs en affichant un message d'erreur
            dispatch({ type: GET_USER_ERROR, payload: err.response?.data?.message || "Erreur inconnue" });
        });
   };
};

export const loginSuccess = (token) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: token,
    };
};
export const logout = () => {
    return (dispatch) => {
        // Supprimer le token de localStorage
        localStorage.removeItem('token');

        // Dispatch l'action de déconnexion
        dispatch({
            type: 'LOGOUT'
        });
    };
};
export const checkAuthentication = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token'); // Récupérer le token du localStorage

        if (token) {
            dispatch(loginSuccess(token)); // Authentifier l'utilisateur

            // Ici, tu peux également appeler getUser pour récupérer les infos de l'utilisateur
            
             // Récupérer les informations de l'utilisateur
        } else {
            dispatch(logout()); // Déconnecter l'utilisateur s'il n'y a pas de token
        }
    };
};