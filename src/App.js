import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

      <Header />

     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
     </Routes>

     <Footer />

     
    </div>
  );
}

export default App;
