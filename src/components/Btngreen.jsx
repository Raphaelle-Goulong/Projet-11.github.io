import '../sass/Btngreen.scss'

function Btngreen({text}) {
    return (
        <>
            <div className='container-button'>
                <button className='btn-green'>{text}</button>
            </div>
        </>
    )
}

export default Btngreen
