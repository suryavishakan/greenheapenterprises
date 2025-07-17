// imports
import Home from './pages/Home.jsx';
import Farms from './components/Farms.jsx';
import Foods from './components/Foods.jsx';
import Gold from './components/Gold.jsx';
import Contact from "./components/Contact.jsx";
import Footer from './components/Footer.jsx';
// react scroll
import { Element } from 'react-scroll';
import Expertise from './components/Expertise.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <Element name = 'foods'>
        <Expertise />
      </Element>
      <Foods />
      <Gold />
      <Farms />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
