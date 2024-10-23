import '../sass/User.scss'
import Btngreen from '../components/Btngreen'
import EditName from '../components/EditName'
import Cardtransaction from '../components/Cardtransaction'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function User() {
    const user = useSelector((state) => state.user)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        console.log("Opening modal")
    }

    const closeModal = () => {
        setIsModalOpen(false)
        console.log("Closing modal")
    }

    return (
        <>
            <div className="container-user">
                <h1>
                    Welcome back
                    <br />
                    {user.userInfo ? `${user.userInfo.firstName || ""} ${user.userInfo.lastName || ""}` : "Loading..."}
                </h1>
                <Btngreen text="Edit Name" onClick={openModal} />

                
                {isModalOpen && (
                    <EditName closeModal={closeModal} />
                )}

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
                        description="Current Balance"
                    />
                </div>
            </div>
        </>
    )
}

export default User
