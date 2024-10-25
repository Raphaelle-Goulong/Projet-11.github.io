import '../sass/Btngreen.scss'

function Btngreen({text, onClick}) {
    return (
        <>
            <div className='container-button'>
                <button onClick={onClick} className='btn-green'>{text}</button>
            </div>
        </>
    )
}

export default Btngreen
