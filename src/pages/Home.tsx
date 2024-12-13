import { LocationBanner } from '../components/LocationBanner';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocationBanner />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}