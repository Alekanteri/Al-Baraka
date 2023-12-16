import React from "react";
import Cart from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import GoogleMap from "./components/GoogleMap";

const App: React.FC = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <Cart />
      </div>
      <GoogleMap />
    </>
  );
};

export default App;
