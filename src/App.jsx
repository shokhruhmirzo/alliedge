import './App.css';

// SECTIONS
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Extrience from './components/Extrience/Extrience';
import Group from './components/Group/Group';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

// imgs
// import logo from './img/alliedge-logo.svg'
// import galochka from './img/alliedge-galochka.svg'
// import time from './img/alliedge-time.svg'
// import team from './img/alliedge-team.svg'
// import cash from './img/alliedge-cash.svg'
// import strelka from './img/alliedge-strelka.svg'
// import websites from './img/alliedge-websites.svg'

// functions
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero/>
      <Extrience/>
      <Group/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
