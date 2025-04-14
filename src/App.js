import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import NavbarComp from './Components/NavbarComp';
import HeroPanel from './Components/HeroPanel';
import StatsSection from './Components/StatsSection';
import MenuSection from './Components/MenuSection';
import MainFooter from './Components/MainFooter';
import FooterContent from './Components/FooterContent';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

function HomePage() {
  return (
    <>
      <NavbarComp />
      <HeroPanel />
      <StatsSection />
      <MenuSection />
      <MainFooter />
      <FooterContent />
    </>
  );
}

function App() {
  document.body.style.backgroundColor = '#F5F5F5';

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
