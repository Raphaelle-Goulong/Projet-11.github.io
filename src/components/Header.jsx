import React from 'react';
import '../sass/Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import argentBankLogo from '../assets/images/argentBankLogo.webp' 
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/user.action';




function Header() {

    const isLoggedIn = useSelector((state) => state.user?.isAuthenticated);
    const userInfo =  useSelector((state) => state.user?.userInfo)

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
                            <Link to="/user" className="main-nav-item Sign-in">
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
