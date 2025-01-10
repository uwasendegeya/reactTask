import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a great product.",
      price: 29.99,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Product 2",
      description: "This product is even better!",
      price: 49.99,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Product 3",
      description: "The best product in the store.",
      price: 99.99,
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
