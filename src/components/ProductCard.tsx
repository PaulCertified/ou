import { type Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{product.location}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">★</span>
              {product.seller.rating}
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{product.condition}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}