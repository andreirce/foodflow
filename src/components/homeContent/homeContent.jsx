import "./homeContent.css"
import dishes from "../../assets/dishes.png"
import "./homeContent.css"

export function HomeContent(){

    return (
        <section className="home">
            <div className="background"></div>
            <div className="cta">
                <h1 className="title">
                    As doações salvam <span>vidas</span>
                </h1>

                <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, laudantium adipisci, culpa sit, asperiores
                </p>
            </div>
            <div className="banner">
                <img src={dishes} alt="" />
            </div>
        </section>
    )

}