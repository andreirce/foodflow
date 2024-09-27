
import { useEffect, useRef } from "react";
import "./card.css"
import VanillaTilt from "vanilla-tilt"


export function Card({donor}) {
    const tiltRef = useRef(null);

    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 17,
          speed: 400,
          glare: true,
          "max-glare": 0.3
        });
      }
  
      return () => {
        if (tiltRef.current?.vanillaTilt) {
          tiltRef.current.vanillaTilt.destroy();
        }
      };
    }, []);

    return (
        <>
            <div className="card" key={donor.donor_id} ref={tiltRef}>
                    <div className="heart">
                        <i className="fas fa-heart"></i>
                    </div>

                    <img src={`https://api-foodflow.onrender.com${donor.image}`} alt="" className="imagedonor" />
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