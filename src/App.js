import React from "react";
import './App.css';
import Navigation from "./Components/navigation/Navigation";
import CarouselHome from "./Components/Home/CarouselHome";
import About from "./Components/About/About";
import CardServices from "./Components/Services/CardServices";
import ContactInfo from "./Components/Contact/Contact";

function App() {
  return (
    <>
        <Navigation/>
        <CarouselHome/>
        <About/>
        <CardServices/>
        <ContactInfo/>
    </>

  );
}

export default App;
