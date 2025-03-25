import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Axios.css";

const Axios = () => {
  let [products, setProducts] = useState([]);

  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map(({ id, title, image, price, category }) => (
        <div className="product-card" key={id}>
          <img src={image} alt={title} className="product-image" />
          <h1 className="product-title">{title}</h1>
          <h3 className="product-price">${price}</h3>
          <h3>{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default Axios;