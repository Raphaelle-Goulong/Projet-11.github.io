import '../sass/Cardhome.scss'

import { useState } from 'react'

function Cardhome({ icon, title, text }) {
    return (
        <>
            <section className="container-Cardhome ">
                <article className="container-text">
                    <img src={icon} className="img-cardHome" alt="Icon" />
                    <h3 className="feature-item-title">{title}</h3>
                    <p className="text-card">{text}</p>
                </article>
            </section>
        </>
    )
}

export default Cardhome
