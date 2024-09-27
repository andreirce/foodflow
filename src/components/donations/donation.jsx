import { Card } from "../cards/card"
import "./donation.css"
import { useEffect, useState } from "react"
import axios from "axios"


export function Donation() {

    const [dataDonor, setDonor] = useState([]);

    async function getDataDonor() {
        const { data } = await axios.get("https://api-foodflow.onrender.com/donor");
        console.log(data);
        setDonor(data.donors);
    }

    useEffect(() => {
        getDataDonor();
    }, []);



    return (
        <section className="donations">
            <h2 className="title">Doadores</h2>
            <h3 className="subtitle">Confira os nossos maiores doadores</h3>


            <div className="container" id="donors">
                {dataDonor.slice(0, 4).map(donor => (
                    <Card key={donor.donor_id} donor={donor}/>
                ))}
            </div>



        </section>
    )

}