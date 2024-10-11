import '../sass/Sign.scss'

function Sign() {
    return (
        <>
            <div className="container-Sign">
                <div className="card-Sign">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1 className="title">Sign In</h1>

                    <form>
                        <div className="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>

                        <input
                            type="submit"
                            value="Sign In"
                            className="sign-in-button"
                            id="btn_send"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign
