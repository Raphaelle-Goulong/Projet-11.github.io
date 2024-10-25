import '../sass/EditName.scss'
import Btngreen from '../components/Btngreen'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserName } from '../actions/user.action'
import { useState } from 'react'

function EditName({ closeModal }) {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [newName, setNewName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserName(newName))
        closeModal()
    }

    return (
        <>
            <div className="container-EditName" onClick={closeModal}>
                <section className="section-EditName" onClick={(e) => e.stopPropagation()}>
                    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
                    <h2>Edit Name</h2>
                    <p>Would you like to change your Name, {user.userInfo?.userName || 'User'} ?</p>
                    <form onSubmit={handleSubmit} className="content-form-editname">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your new Name"
                            required="required"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <Btngreen text="Valid your new name" />
                    </form>
                </section>
            </div>
        </>
    )
}

export default EditName
