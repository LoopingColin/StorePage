import {Routes, Route, Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Checkout from './components/Checkout'
import GamingPCS from './components/GamingPCs'
import SinglePC from './components/SinglePC'





function App() {
  const [pcs, setPcs] = useState([]);
  useEffect(() => {
    fetchPcs();
  }, []);
  const fetchPcs = () => {
    axios
      .get('http://localhost:3001/api/pcs')
      .then((res) => {
        console.log(res);
        setPcs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return(
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/GamingPCs' element={<GamingPCS prop={pcs}/>}/>
          <Route path='/GamingPCs/:id' element={<SinglePC/>}/>
        </Routes>
      <Footer/>
      <Outlet/>
    </div>
  );
}







export default App