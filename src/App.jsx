import './App.css';

// SECTIONS
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Extrience from './components/Extrience/Extrience';
import Group from './components/Group/Group';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';


// functions
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutpage' element={ <Aboutpage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
