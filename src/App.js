// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  let togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  let text=()=>{
    return(
    <TextForm heading="Enter the text to analyze" mode={mode} />
    )
  };
  return (
    <>
    <BrowserRouter> 
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        togglemode={togglemode}
      />
      <div className="container my-5">
        <Routes>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/" element={text()}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
