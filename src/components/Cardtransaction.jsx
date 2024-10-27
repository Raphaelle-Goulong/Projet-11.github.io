import '../sass/Cardtransaction.scss'
import Btngreen from '../components/Btngreen'

function Cardtransaction({title, sold, description}) {
    return (
        <>
            <div className="container-transaction">
                <div className="card-transaction">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{sold}</p>
                    <p className="account-amount-description">{description}</p>
                </div>
                <div className="card-transaction-button">
                    <Btngreen text="View transactions" />
                </div>
            </div>
        </>
    )
} 

export default Cardtransaction
