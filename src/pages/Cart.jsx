import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../Context/CartContext";
import CartItem from "../components/CartItem";
import { formatPrice } from "../Utils/formatPrice";

const Cart = () => {
  const { cartItems, cartCount, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="container mx-auto flex flex-col items-center px-4 py-24 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-600" />
        <h2 className="mt-4 text-2xl font-bold text-white">Your cart is empty</h2>
        <p className="mt-2 text-gray-400">Add a product to get started.</p>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-500"
        >
          Browse products
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-white">Shopping cart</h2>
        <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-400">
          Clear cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <ul className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <h3 className="text-lg font-bold text-white">Order summary</h3>
          <dl className="mt-4 space-y-3 text-gray-300">
            <div className="flex justify-between">
              <dt>Items ({cartCount})</dt>
              <dd>{formatPrice(cartTotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd className="text-green-400">Free</dd>
            </div>
            <div className="flex justify-between border-t border-gray-800 pt-3 text-lg font-extrabold text-white">
              <dt>Total</dt>
              <dd>{formatPrice(cartTotal)}</dd>
            </div>
          </dl>
          <Link
            to="/checkout"
            className="mt-6 block rounded-xl bg-orange-600 py-3 text-center font-bold text-white hover:bg-orange-500"
          >
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
