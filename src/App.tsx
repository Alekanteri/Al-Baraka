import React from "react";
import Cart from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import GoogleMap from "./components/GoogleMap";
import Carousel from "./components/Carousel";
import Reviews from "./components/Reviews";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <Calculator />
        <Cart />
        <Carousel />
      </div>
      <GoogleMap />
      <div className="app-container">
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default App;
