import './home.css';
import React, { useState, useEffect } from 'react';
import Timer from '../components/timer';

const home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((datasParameter) => {
        datasParameter.json().then((par) => {
          setDatas(par);
        });
      });
  }, []);

  return (
    <div className="homePage">
      <p>Products</p>
      <section className="homePage--homecont">
        {datas.map((data) => (
          <section className="homePage--homecont--cont" key={data.id}>
            <div>
              <img className="homePage--homecont--cont__img" src={data.image} alt="" />
            </div>
            <div className="homePage--homecont--cont__text">{data.title}</div>
            <div className="homePage--homecont--cont__text">Price: {data.price}</div>
            <Timer data={data} />
          </section>
        ))}
      </section>
    </div>
  );
};

export default home;
