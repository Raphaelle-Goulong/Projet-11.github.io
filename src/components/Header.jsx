import '../sass/Header.scss'
import { Link } from 'react-router-dom'
import argentBankLogo from '../images/argentBankLogo.png' // Assurez-vous que le chemin est correct

function Header() {
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
                    <Link to="/Sign" className="main-nav-item Sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header
