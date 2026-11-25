import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { initialProducts } from "../data/product";
import { useCart } from "../Context/CartContext";
import { formatPrice } from "../Utils/formatPrice";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = initialProducts.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-24 text-center text-gray-300">
        <h2 className="text-2xl font-bold text-white">Product not found</h2>
        <p className="mt-2">It may have been removed or the link is wrong.</p>
        <Link to="/" className="mt-6 inline-block text-orange-400 hover:underline">
          Back to products
        </Link>
      </main>
    );
  }

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-gray-400 hover:text-orange-400"
      >
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid gap-10 rounded-2xl border border-gray-800 bg-gray-900 p-6 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-orange-400">
            {product.category}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-400">{product.description}</p>
          <p className="mt-6 text-4xl font-extrabold text-white">
            {formatPrice(product.price)}
          </p>

          <button
            onClick={handleAdd}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-500 sm:w-auto"
          >
            <ShoppingCart className="h-5 w-5" />
            {added ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
