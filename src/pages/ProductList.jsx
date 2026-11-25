import { useEffect, useMemo, useState } from "react";
import { initialProducts } from "../data/product";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import Loding from "../components/Loding";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Simulates a network request so the loading state is visible.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  if (loading) return <Loding message="Loading products..." />;

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {filteredProducts.length === 0 ? (
        <p className="mt-16 text-center text-gray-400">
          No products match your search. Try a different keyword or category.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductList;
