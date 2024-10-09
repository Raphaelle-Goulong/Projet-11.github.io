import '../sass/Home.scss'
import Cardhome from '../components/Cardhome'
import iconChat from '../images/icon-chat.png'
import iconMoney from '../images/icon-money.png'
import iconSecurity from '../images/icon-security.png'

function Home({ icon, title, text }) {
    return (
        <>
            <section className="container-home">
                <div className="container-img">
                    <section className="container-text">
                        <p class="subtitle">No fees.</p>
                        <p class="subtitle">No minimum deposit.</p>
                        <p class="subtitle">High interest rates.</p>
                        <p class="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="container-circles">
                    <Cardhome
                        icon={iconChat}
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in touch through our 24/7 chat
                        or through a phone call in less than 5 minutes."
                    />
                    <Cardhome
                        icon={iconMoney}
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest rate will be!
"
                    />
                    <Cardhome
                        icon={iconSecurity}
                        title="Security you can trust"
                        text=" We use top of the line encryption to make sure your data and money is always safe."
                    />
                </section>
            </section>
        </>
    )
}

export default Home
