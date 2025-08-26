import React from 'react';
import { Link } from 'react-router-dom';

type ProductType = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
};

type ProductCardProps = {
  product: ProductType;
  onOrderNow: (product: ProductType) => void;
  animationDelay?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderNow, animationDelay }) => (
  <div
    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
    style={animationDelay ? { animationDelay: `${animationDelay}s` } : {}}
  >
    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-blue-500">{product.price}</span>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onOrderNow(product)}
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Order Now
        </button>
        
      </div>
    </div>
  </div>
);

export default ProductCard;