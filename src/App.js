import './App.css';
import Dishes from './Dishes/Dishes';
import Feecback from './Feedback/Feecback';
import Hero from './Hero-section/Hero';
import HowToOrder from './HowToOrder/HowToOrder';
import Subscription from './Subscription/Subscription';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function App() {
 
  return (
    <div className="App custom-range:overflow-x-hidden custom-range:px-[20px]">
     <Navbar/>
     <Hero/>
     <Dishes/>
     <HowToOrder/>
     <Feecback />
     <Subscription/>
     <Footer/>
    </div>
  );
}

export default App;
