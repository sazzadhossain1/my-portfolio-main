import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import MyResume from "./Components/MyResume/MyResume";
import { Navbar } from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" main-div">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
