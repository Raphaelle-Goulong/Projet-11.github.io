import axios from "axios";

// Définir l'action pour récupérer les posts
export const GET_AUTH = "GET_AUTH"

export const getAuth = () => { 
   return (dispatch) => {
        // Récupérer le token stocké dans localStorage
        const token = localStorage.getItem('token'); 

        // Faire la requête GET en ajoutant le token dans l'en-tête Authorization
        return axios.get("http://localhost:3001/api/v1/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`, // On ajoute le token ici
            },
        })
        .then((res) => {
            console.log(res); // Log de la réponse de l'API pour vérifier
            dispatch({ type: GET_AUTH, payload: res.data }); // Envoie les données au store Redux
        })
        .catch((err) => {
            console.error("Erreur : ", err.response); // Gérer les erreurs en affichant un message d'erreur
        });
   }
   }