import React from 'react';
import  Carousel  from "../components/Carousel";
import Categories from '../components/Categories';
import TrendingProducts from '../components/ProductList';
import Babycare from "../components/Babycare";
import Healthsection from "../components/Healthsection";
import Homebanner from "../components/Homebanner";

const Home = () => {
  return (
    <>
      <Carousel/>
      <Categories />
      <TrendingProducts />
      <Homebanner />
      <Babycare />
      <Healthsection />
    </>
  )
}

export default Home