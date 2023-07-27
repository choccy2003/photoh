import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbanner from "./components/Searchbanner";
import Tipgrid from "./components/Tipgrid";
import Topicgrid from "./components/Topicgrid";
import './pluto-sans.css'

function App() {
  let [tiparray, setTipArray] = useState([{ id: 1, title: "Visionary art and views", description: "lorem ipsum lorem ipsum lorem ipsum" }, { id: 2, title: "Minimalist photography idead and techniques", description: "lorem ipsum lorem ipsum lorem ipsum" }, { id: 3, title: "Photography angles and perspective", description: "lorem ipsum lorem ipsum lorem ipsum" },])
  return (
    <div>
      <Navbar />
      <Searchbanner />
      <Topicgrid />
      <Tipgrid tiparray={tiparray} />
      <div>
        <div style={{ fontSize: "34px", fontWeight: "600", width: "fit-content", margin: "auto", marginTop: "70px", marginBottom: "10px" }}>Join the fun!</div>
        <div style={{ fontSize: "18px", width: "fit-content", margin: "auto", marginBottom: "5px" }}>Subscribe to our news letter to stay updated.<br />werespect your privacy and won't spam you</div>
        <div style={{ width: "fit-content", margin: "auto", marginTop: "15px", marginBottom: "70px" }}><button style={{ borderRadius: "20px", height: "40px", width: "170px", fontSize: "18px", backgroundColor: "transparent" }}>Subscribe</button></div>
      </div>
    </div>
  );
}

export default App;
