import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { formatPrice } from "../Utils/formatPrice";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <li className="flex gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4">
      <div className="h-24 w-24 shrink-0 rounded-xl bg-white p-1">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <Link
            to={`/product/${item.id}`}
            className="font-bold text-white line-clamp-2 hover:text-orange-400"
          >
            {item.name}
          </Link>
          <p className="text-sm text-gray-400">{formatPrice(item.price)}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="rounded-lg bg-gray-800 p-1.5 hover:bg-gray-700"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-6 text-center font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="rounded-lg bg-gray-800 p-1.5 hover:bg-gray-700"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-extrabold text-orange-400">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.name}`}
              className="text-gray-500 hover:text-red-400"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
