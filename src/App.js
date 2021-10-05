import './App.css';
import React from 'react';

import Header from "./components/header";
import Footer from "./components/footer";

import Products from "./components/product";
function App () {
  return (
    <>
      <Header />
     <Products/>
      <Footer />
    </>
  );
}

export default App;