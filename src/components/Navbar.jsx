import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <Home className="w-8 h-8 text-orange-400 drop-shadow-lg" />
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-widest uppercase">
            WDM <span className="text-orange-400">Store</span>
          </h1>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/cart"
            aria-label={`Cart, ${cartCount} items`}
            className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition-all duration-200 border border-orange-400/50 shadow-lg"
          >
            <ShoppingCart className="w-6 h-6 text-orange-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
