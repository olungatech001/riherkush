import React from 'react';
import ProductCard from './ProductCard';
import image from "../images/sample.jpg";

const ProductPage = () => {
  const products = [
    {
      name: 'Hoodie',
      price: 2500,
      imageUrl: image,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
