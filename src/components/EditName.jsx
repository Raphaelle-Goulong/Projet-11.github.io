import '../sass/EditName.scss'
import Btngreen from '../components/Btngreen'
import { useSelector } from 'react-redux'

function EditName({ closeModal }) { 
    const user = useSelector((state) => state.user)

    return (
        <>
            
                <div className='container-EditName'>
                    <section className='section-EditName'>
                     
                        <i className="fa-solid fa-xmark" onClick={closeModal}></i> 
                        <h2>Edit Name</h2>
                        <p>Would you like to change your Name, {user.userInfo?.userName || "User"}?</p>
                        <form>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your new Name"
                                required="required"
                            />
                        </form>
                        <Btngreen text="Valid your new name" />
                    </section>
                </div>
            
        </>
    )
}

export default EditName
