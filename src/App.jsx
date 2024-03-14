import './App.css';

// SECTIONS
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Extrience from './components/Extrience/Extrience';
import Group from './components/Group/Group';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
