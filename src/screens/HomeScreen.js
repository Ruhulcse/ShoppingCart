import React,{useEffect, useState} from 'react'
import {URL} from "../utils/config"
import axios from 'axios'
import "./HomScreen.css";
import ProductCard from "../Components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      async function fetchUserData() {
        const {data} = await axios.get(`${URL}products`);
        setProducts(data);
        console.log(data);
      }
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;