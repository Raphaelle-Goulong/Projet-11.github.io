import '../sass/Sign.scss'
import Btngreen from '../components/Btngreen'
function Sign() {
    return (
        <>
            <div className="container-Sign">
                <div className="card-Sign">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1 className="title">Sign In</h1>

                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
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
