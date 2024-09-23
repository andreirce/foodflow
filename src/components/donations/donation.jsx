import { useEffect, useState } from "react"
import "./donation.css"
import axios from "axios"

export function Donation() {

    const baseUrl = "http://localhost:4000"

    const [dataDonor, setDonor] = useState([])

    async function getData() {
        const { data } = await axios.get("http://localhost:4000/donor")
        console.log(data)
        setDonor(data.donors)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <section className="donations">
            <h2 className="title">Doações</h2>
            <h3 className="subtitle">Confira os nossos maiores doadores</h3>


            <div className="container">
                {dataDonor.map(donor => (

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


                ))}
            </div>



        </section>
    )

}