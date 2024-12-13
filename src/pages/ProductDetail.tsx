import { useParams } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { SellerInfo } from '../components/SellerInfo';
import { Map } from '../components/Map';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{product.location}</span>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {product.condition}
              </span>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-8 border-t pt-8">
            <SellerInfo 
              name={product.seller.name}
              rating={product.seller.rating}
              joinDate="Jan 2023"
            />
            
            <button className="mt-6 w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-emerald-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              Message Seller
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Item Location</h2>
        <Map location={product.location} />
      </div>
    </div>
  );
}