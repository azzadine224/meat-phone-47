import React from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../../lib/queries";

// Helper function to group products by category
const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const categoryName = product.category?.name || "Uncategorized"; // Fallback to "Uncategorized"
    
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    
    acc[categoryName].push(product);
    return acc;
  }, {});
};

export default async function ProductsList() {
  const products = await fetchProducts();
  // Group products by category
  const productsByCategory = groupProductsByCategory(products);

  return (
    <div className="mx-auto gap-2 px-4 lg:px-8 py-8 w-full">      
      {/* Loop through each category and display products */}
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className=" my-32">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-14">{category}</h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsByCategory[category].map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
