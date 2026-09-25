import React from 'react'

export default function TahaCardComponent(props) {
    let { title, img, desc, price } = props
    return (
        <div className="card">
            <img src={img} alt="Product"/>

            <h2>{title}</h2>

            <p>{desc}</p>
            <h2>{price}</h2>



        </div>
    )
}
