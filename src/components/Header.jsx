import React, { useState } from 'react';
import '../sass/Header.scss'
import { Link } from 'react-router-dom'
import argentBankLogo from '../images/argentBankLogo.png' 

function Header() {
    // Utilisez un état pour suivre si l'utilisateur est connecté
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('Tony'); // Remplacez 'Tony' par le nom d'utilisateur réel

    const handleLogout = () => {
        // Ajoutez ici la logique de déconnexion
        setIsLoggedIn(false);
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
                            <Link to="/profile" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                {username}
                            </Link>
                            <Link to="/" className="main-nav-item" onClick={handleLogout}>
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
    )
}

export default Header