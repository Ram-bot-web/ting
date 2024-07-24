import './App.css';
import Header from './components/Header';
// import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid ';
import Footer from './components/Footer';
import Logos from './components/Logos';
import Grids from './components/Grids';
import LivingUp from './components/LivingUp';
import ExpansionBox from './components/ExpansionBox';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <HeroSection/> */}
      <ProductGrid/>
      <Logos/>
      <Grids/>
      <LivingUp/>
      <ExpansionBox/>
      <Footer/>
    </div>
  );
}

export default App;
