import React, { useState } from "react";
import "./App.css";
import {  BrowserRouter as Router,  Route,  Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light"); //wether the dark mde is enabled or not.
  const [alert, setAlert] = useState(null);
  const removeBodyClass = ()=>{
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }
  const toggleMode = (cls)=>{
    removeBodyClass();
    document.body.classList.add("bg-"+cls);
    if(cls === "dark" ){
      setMode("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert(cls+" mode has been Enabled","success");
    }
    else if(cls === "light" ){
      setMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(cls+" mode has been Enabled","success");
    }
    else if(cls === "danger" ){
      setMode("dark");
      document.body.style.color = "white";
      showAlert(cls+" mode has been Enabled","success");
    }
    else if(cls === "success" ){
      setMode("dark");
      document.body.style.color = "white";
      showAlert(cls+" mode has been Enabled","success");
    }
    // if(mode === "light" ){
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#454545";
    //   document.body.style.color = "white";
    //   showAlert(cls+" mode has been Enabled","success");
    // }
    // else{
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   document.body.style.color = "black";
    //   showAlert(cls+" mode has been Enabled","success");
    // }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
            <Route path="home" element={<Textform heading="Text Analysis" 
              showAlert={showAlert}/>}/>              
            <Route path="about" element={<About  mode={mode}/>} />              
            <Route path="/" 
            element={<Textform heading="Text Analysis" showAlert={showAlert}/>} />
            <Route path="contact" element={<Contact mail={"abc@gmail.com"}/>} />              
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;