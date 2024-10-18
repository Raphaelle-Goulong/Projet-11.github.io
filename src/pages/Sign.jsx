// import '../sass/Sign.scss'
// import Btngreen from '../components/Btngreen'
// import { useNavigate } from 'react-router-dom'
// import React, { useState } from 'react'

// function Sign() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         // Log pour vérifier ce qui est envoyé
//         console.log({ email: username, password })

//         // Appel à l'API pour vérifier les identifiants
//         fetch('http://localhost:3001/api/v1/user/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email: username, password }) // Remplace 'username' par 'email'
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Réponse de l'API:", data)

//                 // Accéder au body pour obtenir le token ou les données de connexion
//                 if (data.status === 200) {
//                     const token = data.body.token // Assumes the token is inside the body object
//                     console.log('Token:', token)

//                     // Stocker les informations dans localStorage 
//                     localStorage.setItem('token', token);
                    
//                    // Rediriger vers la page utilisateur 
//                     navigate('/user')
//                 } else {
//                     alert('Identifiants incorrects ou problème de validation')
//                 }
//             })
//             .catch((error) => console.error('Erreur de connexion:', error))
//     }

//     return (
//         <>
//             <div className="container-Sign">
//                 <div className="card-Sign">
//                     <i className="fa fa-user-circle sign-in-icon"></i>
//                     <h1 className="title">Sign In</h1>
//                     <p className="error">Identifiants incorrects ou problème de validation</p>

//                     <form onSubmit={handleSubmit}>
//                         <div className="input-wrapper">
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </div>
//                         <div className="input-wrapper">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <div className="input-remember">
//                             <input type="checkbox" id="remember-me" />
//                             <label htmlFor="remember-me">Remember me</label>
//                         </div>

//                         <Btngreen
//                             text="Sign In"
//                             type="submit"
//                             value="Sign In"
//                             className="btn-green"
//                             id="btn_send"
//                         />
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Sign



import '../sass/Sign.scss'
import Btngreen from '../components/Btngreen'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/user.action'; // Action de connexion
import { getUser } from '../actions/user.action';


function Sign() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        // Appel à l'API pour vérifier les identifiants
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    const token = data.body.token;
                    
                    // Stocker le token dans localStorage
                    localStorage.setItem('token', token);
                    
                    // Dispatcher une action pour indiquer que l'utilisateur est connecté
                    dispatch(loginSuccess(token));
                    dispatch(getUser())

                    // Rediriger vers la page utilisateur
                    navigate('/user')
                } else {
                    alert('Identifiants incorrects ou problème de validation')
                }
            })
            .catch((error) => console.error('Erreur de connexion:', error))
    }

    return (
        <>
            <div className="container-Sign">
                <div className="card-Sign">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1 className="title">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <Btngreen
                            text="Sign In"
                            type="submit"
                            value="Sign In"
                            className="btn-green"
                            id="btn_send"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign
