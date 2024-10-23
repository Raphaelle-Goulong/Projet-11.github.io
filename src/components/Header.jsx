// import React, { useState, useEffect } from 'react';
// import '../sass/Header.scss'
// import { Link, useNavigate } from 'react-router-dom'
// import argentBankLogo from '../images/argentBankLogo.png' 
// import { useSelector } from 'react-redux';

// function Header() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const username = useSelector((state) => state.userReducer.body?.userName) || 'User'; // Utiliser une vérification de sécurité
//     const navigate = useNavigate();

//     // Vérifier le token dans le localStorage au chargement du composant
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             setIsLoggedIn(true);
//         }
//     }, []);

//     const handleLogout = () => {
//         // Supprimer le token et déconnecter l'utilisateur
//         localStorage.removeItem('token');
//         setIsLoggedIn(false);
//         navigate('/'); // Rediriger vers la page d'accueil après la déconnexion
//     }

//     return (
//         <>
//             <nav className="main-nav">
//                 <div className="main-nav-logo">
//                     <Link to="/" className="-link-img-home">
//                         <img
//                             className="main-nav-logo-image"
//                             src={argentBankLogo}
//                             alt="Argent Bank Logo"
//                         />
//                         <h1 className="sr-only">Argent Bank</h1>
//                     </Link>
//                 </div>

//                 <div className="link-sign">
//                     {isLoggedIn ? (
//                         <>
//                             <Link to="/profile" className="main-nav-item Sign-in">
//                                 <i className="fa fa-user-circle"></i>
//                                 {username ? ` ${username}` : " User"}
//                             </Link>
//                             <Link to="/" className="main-nav-item Sign-in" onClick={handleLogout}>
//                                 <i className="fa fa-sign-out"></i>
//                                 Sign Out
//                             </Link>
//                         </>
//                     ) : (
//                         <Link to="/Sign" className="main-nav-item Sign-in">
//                             <i className="fa fa-user-circle"></i>
//                             Sign In
//                         </Link>
//                     )}
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Header;




import React from 'react';
import '../sass/Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import argentBankLogo from '../images/argentBankLogo.png' 
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/user.action';




function Header() {

    const isLoggedIn = useSelector((state) => state.user?.isAuthenticated);
    const userInfo =  useSelector((state) => state.user?.userInfo)
    console.log("Contenu du userReducer :", userInfo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout()); // Déconnecte l'utilisateur dans Redux
        navigate('/');
    }

    return (
        <>
            <nav className="main-nav">
                <div className="main-nav-logo">
                    <Link to="/" className="-link-img-home">
                        <img
                            className="main-nav-logo-image"
                            src={argentBankLogo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                </div>

                <div className="link-sign">
                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" className="main-nav-item Sign-in">
                                <i className="fa fa-user-circle"></i>

                                {userInfo?.userName || "Utilisateur"}
                            </Link>
                            <Link to="/" className="main-nav-item Sign-in" onClick={handleLogout}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/Sign" className="main-nav-item Sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Header;
