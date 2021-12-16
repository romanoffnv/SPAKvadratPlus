import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/General/Footer/Footer";
import Navi from "./Components/General/Navi/Navi";
import Main from "./Components/Main/Main";
import Repairs from "./Components/Repairs/Repairs";
import Services from "./Components/Services/Services";
import Homescreen from "./screens/Homescreen";
import Cart from "./Components/Cart/Cart";


function App() {
  
  return (
    <div className="App">
      <Navi />
      <Cart />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path = '/Repairs' element={<Repairs />} />
        <Route path = '/Services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
