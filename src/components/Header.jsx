import React, { useState, useEffect } from 'react';
import '../sass/Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import argentBankLogo from '../images/argentBankLogo.png' 

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // Vérifier le token dans le localStorage au chargement du composant
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username'); // Supposons que le nom d'utilisateur soit stocké
        if (token) {
            setIsLoggedIn(true);
            setUsername(storedUsername || 'User'); // Utilise un nom par défaut si l'username n'est pas stocké
        }
    }, []);

    const handleLogout = () => {
        // Supprimer le token et déconnecter l'utilisateur
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        navigate('/'); // Rediriger vers la page d'accueil après la déconnexion
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
                                {username}
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
