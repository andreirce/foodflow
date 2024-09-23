import "./feedback.css"
import chef from "../../assets/chef.png"
import axios from "axios"
import { useEffect, useState } from "react";

export function Feedbacks() {
    const baseUrl = "http://localhost:4000"

    const [dataUser, setUser] = useState([]);

    async function getData() {
        const { data } = await axios.get("http://localhost:4000/user");
        console.log(data);
        setUser(data.users);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
        <div className="container_feedback">
            <img src={chef} alt="" className="imagechef"/>

            <div className="feedback_content">
                <h2 className="title">feedbacks</h2>
                <h3 className="subtitle"> 
                    O que os usuários falam sobre a iniciativa
                </h3>

                <div className="feedbacks">

                    {
                        dataUser.map(user => (

                    <div className="feedback">
                        <img src={`${baseUrl}${user.image}`}alt="" className="feedback_avatar"/>
                        <div>
                            <p>
                                {user.username} 
                                <span>
                                    <i className="fas fa-star" id="icon"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea vel quia eveniet, itaque rem nobis! Quaerat asperiores deleniti
                            </p>
                        </div>
                    </div>
                        ))
                    }

                </div>

            </div>

        </div>
        
        </>
    )
}