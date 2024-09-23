import "./homeContent.css"
import dishes from "../../assets/dishes.png"
import "./homeContent.css"

export function HomeContent(){

    return (
        <section className="home" id="home">
            <div className="background"></div>
            <div className="cta">
                <h1 className="title">
                    As doações salvam <span>vidas</span>
                </h1>

                <p className="description">
                Doe esperança, doe alimento. Pequenos atos podem mudar o mundo. Juntos somos mais fortes!
                </p>
            </div>
            <div className="banner">
                <img src={dishes} alt="" />
            </div>
        </section>
    )

}