import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { formatPrice } from "../Utils/formatPrice";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-orange-500 transition duration-200">
      <Link to={`/product/${product.id}`} className="flex-1">
        <div className="flex h-48 items-center justify-center rounded-xl bg-white p-2">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="mt-4 text-xs font-semibold text-orange-400">
          {product.category}
        </p>
        <h3 className="mt-1 font-bold text-white line-clamp-2">
          {product.name}
        </h3>
      </Link>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-extrabold text-white">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          className="rounded-xl bg-orange-600 p-2.5 text-white transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-orange-300"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
