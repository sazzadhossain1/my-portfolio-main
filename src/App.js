import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Details from "./Components/Details/Details";
import Skill from "./Components/Skill/Skill";
import Service from "./Components/Service/Service";
import Details2 from "./Components/Details2/Details2";
import Detail3 from "./Components/Details3/Detail3";

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
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
        <Route path="/details2" element={<Details2></Details2>}></Route>
        <Route path="/detail3" element={<Detail3></Detail3>}></Route>
        <Route path="/skill" element={<Skill></Skill>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
