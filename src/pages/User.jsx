import '../sass/User.scss'
import Btngreen from '../components/Btngreen'
import Cardtransaction from '../components/Cardtransaction'
import { useSelector } from 'react-redux'

function User() {

    const user =  useSelector((state) => state.userReducer)

// console.log(user);



    return (
        <>
            <div className="container-user">
                <h1>
                    Welcome back
                    <br />
                    {/* Affichage du prénom et du nom avec un espace, et gestion de l'état de chargement */}
                    {user.body ? `${user.body.firstName || ""} ${user.body.lastName || ""}` : "Loading..."}
                </h1>
                <Btngreen text="Edit Name" />
                <div className="container-account-user">
                    <Cardtransaction
                        title="Argent Bank Checking (x8349)"
                        sold="$2,082.79"
                        description="Available Balance"
                    />
                    <Cardtransaction
                        title="Argent Bank Savings (x6712)"
                        sold="$10,928.42"
                        description="Available Balance"
                    />
                    <Cardtransaction
                        title="Argent Bank Checking (x8349)"
                        sold="$184.30"
                        description="Available Balance"
                    />
                </div>
            </div>
        </>
    )
}

export default User
