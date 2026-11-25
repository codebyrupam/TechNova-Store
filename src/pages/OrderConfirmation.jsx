import { Link, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { formatPrice } from "../Utils/formatPrice";

const OrderConfirmation = () => {
  const { lastOrder } = useCart();

  if (!lastOrder) return <Navigate to="/" replace />;

  const { id, customer, items, total } = lastOrder;

  return (
    <main className="container mx-auto max-w-2xl px-4 py-12">
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-400" />
        <h2 className="mt-4 text-3xl font-extrabold text-white">Order placed</h2>
        <p className="mt-2 text-gray-400">
          Thanks, {customer.fullName}. Your order <strong className="text-white">{id}</strong>{" "}
          will be delivered to {customer.address}, {customer.city} - {customer.pincode}.
        </p>

        <ul className="mt-6 space-y-2 border-t border-gray-800 pt-6 text-left text-sm text-gray-300">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between gap-4">
              <span>
                {item.name} &times; {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
          <li className="flex justify-between border-t border-gray-800 pt-3 text-lg font-extrabold text-white">
            <span>Total paid</span>
            <span>{formatPrice(total)}</span>
          </li>
        </ul>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-500"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
};

export default OrderConfirmation;
