import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => (
  <Router>
    <div className="flex min-h-screen flex-col bg-gray-950 font-sans">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="*"
            element={
              <p className="py-24 text-center text-gray-400">Page not found.</p>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
