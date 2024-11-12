import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Crouser.css";

function Crouser({ product }) {

    const [crouserCard, setCrouserCard] = useState(0);

    const next = () => {
        setCrouserCard(crouserCard === product.length - 1 ? 0 : crouserCard + 1)
    }
    const preview = () => {
        setCrouserCard(crouserCard === 0 ? product.length - 1 : crouserCard - 1)
    }
    return (
        <>

            <FaArrowLeft onClick={preview} class="left-arrow" />
            <div className="crouser">

                {
                    product.map((item, idx) => (

                        <div className={crouserCard === idx ? "crouser-card" : "crouser-card crouser-cardHidden"} key={idx}>
                            <div className="left">
                                <h2 class="product-name">{item.title}</h2>
                                <p class="desc">{item.description}</p>
                                <div class='crousel-detail'>

                                    <p class="crouser-price">Price {item.price}$</p>
                                    <p class="rating">{item.rating.rate} ⭐</p>
                                </div>

                            </div>
                            <div className="right">
                                <img src={item.image} alt="" class="crouser-image " />

                            </div>

                            <span className="indicators">
                                {product.map((_, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className={
                                                crouserCard === idx ? "indicator" : "indicator indicator-inactive"
                                            }
                                            onClick={() => setCrouserCard(idx)}
                                        ></div>
                                    );
                                })}
                            </span>
                        </div>

                    ))


                }
            </div>
            <FaArrowRight onClick={next} class="right-arrow" />

            {
                console.log(product)
            }

        </>
    )
}

export default Crouser