import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DigitalMarketing from './Components/pages/DigitalMarketing';
import DigitalAdvertising from './Components/pages/digitaladvertising/DigitalAdvertising';
import DigitalBranding from './Components/pages/DigitalBranding';
import CreativeDesign from './Components/pages/CreativeDesign';
import WordPress from './Components/pages/WordPress';
import Blogs from './Components/pages/Blogs';
import Aboutus from './Components/pages/Aboutus';
import Contactus from './Components/pages/Contactus';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/digital-advertising' element={<DigitalAdvertising />} />
          <Route path='/digital-branding' element={<DigitalBranding />} />
          <Route path='/creative-design' element={<CreativeDesign />} />
          <Route path='/wordpress' element={<WordPress />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
