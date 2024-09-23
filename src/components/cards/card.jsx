
import "./card.css"


export function Card({donor}) {
    const baseUrl = "http://localhost:4000"

    return (
        <>
            <div className="card" key={donor.donor_id}>
                    <div className="heart">
                        <i className="fas fa-heart"></i>
                    </div>

                    <img src={`${baseUrl}${donor.image}`} alt="" className="imagedonor" />
                    <h3 className="titledonor">{donor.name}</h3>

                    <span className="description">
                        O {donor.name} tem se tornado um grande impulsionador no combate a fome!
                    </span>

                    <div className="rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(500+)</span>
                    </div>


                </div>
        </>
    )
}