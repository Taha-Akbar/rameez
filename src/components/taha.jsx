import React, { useEffect, useState } from 'react'
import TahaCardComponent from './TahaCardComponent'
import axios from 'axios'

export default function Taha() {

    let [products, setProducts] = useState([])





    async function fetchProduct() {


        try {

            let res = await axios.get('https://dummyjson.com/products')

            console.log(res.data.products)

            setProducts(res.data.products)



        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, ([]))


    return (
        <div className="card-container">


            {products.map((x) => {
                let { title, description, image, price } = x
                return <TahaCardComponent title={title} desc={description} img={image} price={price} />


            })}


        </div>

    )
}


