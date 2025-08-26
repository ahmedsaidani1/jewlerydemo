import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const categories = ['All', 'Bracelets', 'Necklaces'];

  const products = [
    {
      id: 1,
      name: 'Rose Gold Charm Bracelet',
      price: '$45',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Bracelets',
      description: 'Elegant rose gold bracelet with delicate charms'
    },
    {
      id: 2,
      name: 'Pearl Elegance Necklace',
      price: '$65',
      image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Necklaces',
      description: 'Classic pearl necklace for timeless elegance'
    },
    {
      id: 3,
      name: 'Crystal Dreams Bracelet',
      price: '$38',
      image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Bracelets',
      description: 'Sparkling crystal bracelet with adjustable chain'
    },
    {
      id: 4,
      name: 'Golden Chain Necklace',
      price: '$55',
      image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Necklaces',
      description: 'Sophisticated gold chain necklace'
    },
    {
      id: 5,
      name: 'Silver Infinity Bracelet',
      price: '$42',
      image: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Bracelets',
      description: 'Modern silver bracelet with infinity symbol'
    },
    {
      id: 6,
      name: 'Diamond Heart Necklace',
      price: '$78',
      image: 'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Necklaces',
      description: 'Beautiful heart pendant with diamond accents'
    },
    {
      id: 7,
      name: 'Bohemian Beaded Bracelet',
      price: '$32',
      image: 'https://images.pexels.com/photos/1454177/pexels-photo-1454177.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Bracelets',
      description: 'Colorful beaded bracelet with bohemian style'
    },
    {
      id: 8,
      name: 'Vintage Locket Necklace',
      price: '$68',
      image: 'https://images.pexels.com/photos/1454178/pexels-photo-1454178.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Necklaces',
      description: 'Antique-style locket necklace with intricate details'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
  };

  const handleOrderNow = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted jewelry pieces, each designed with love and attention to detail
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by category:</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrderNow={handleOrderNow}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Shop;