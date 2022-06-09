import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import MyResume from "./Components/MyResume/MyResume";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App main-div">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/myresume" element={<MyResume></MyResume>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
