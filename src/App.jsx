import React from "react";
import Navbar from "./components/navbar/navbar";
import Leftside from "./components/leftside/leftside";
import Rightside from "./components/Rightside/rightside";
import Middleconten from "./components/middlecontent/middleconten";
import Footer from "./components/footer/footer";
import "./components/navbar/navbar.css";
import "./components/leftside/leftside.css";
import "./components/Rightside/rightside.css";
import "./components/middlecontent/middlecontent.css";
import "./components/footer/footer.css"
import "./components/mediaQuerys/media.css";

function App() {
  return (
   <>
   <Navbar/>
   <Leftside/>
   <Rightside/>
   <Middleconten/>
   <Footer/>
   <Footer/>
   </>
  );
}

export default App;
