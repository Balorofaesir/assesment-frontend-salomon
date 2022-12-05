import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productD.css';

const products = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((datasParameter) => {
        datasParameter.json().then((par) => {
          setData(par);
        });
      });
  }, []);
  return (
    <div className="product">
      <section className="product--prodComp" key={data.id}>
        <div className="product--prodComp__title">Product: {data.title}</div>
        <div>Price: {data.price} USD</div>
        <div className="product--prodComp__description"> Product description: {data.description}</div>
        <div>Category: {data.category}</div>
        <div> <img className="product--prodComp__img" src={data.image} alt="" /></div>
      </section>
    </div>
  );
};

export default products;
