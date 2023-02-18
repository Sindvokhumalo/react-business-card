
import React from "react";
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Info from "./components/Info";



export default function App()

{

  return(
            
    <div  className="app--container">
    <div  className="app--container--two">
    
   
    <Header />
    <Info />
    <Footer />
    </div>
    </div>

  )
}