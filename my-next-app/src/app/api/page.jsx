"use client";


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [product, setproduct] = useState([])

    const fatchdata = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log(res.data);
        setproduct(res.data)
    }

    useEffect(() => {
        fatchdata()
    }, [])

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Products...</h1>
            {
                product.map((item) => (
                    <div className="border p-4 rounded-lg shadow-lg">
                        <img className="w-full h-40 object-contain"  src={item.image} alt="" />
                        <h1 className="text-xl font-semibold mt-2">Title : {item.title}</h1>
                        <h2  className="text-lg text-green-600" >Price : {item.price}</h2>
                        <h3 className="text-gray-500">Category : {item.category}</h3>
                        <p className="text-sm text-gray-600">Description : {item.description}</p>
                        <p className="text-black-500">⭐ Rating : {item.rating.rate}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Page

