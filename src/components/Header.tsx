import { Search, MessageCircle, Bell, Plus, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex-1 flex items-center">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Search OfferUp"
              />
            </div>
          </div>
          
          <nav className="flex space-x-8 ml-8">
            <Link to="/messages" className="text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/notifications" className="text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </Link>
            <Link to="/post" className="text-gray-600 hover:text-gray-900">
              <Plus className="h-6 w-6" />
            </Link>
          </nav>
        </div>
        
        <div className="flex justify-between py-2 border-t">
          <Link to="/" className="flex flex-col items-center text-emerald-600">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/my-listings" className="flex flex-col items-center text-gray-600">
            <Plus className="h-5 w-5" />
            <span className="text-xs mt-1">Sell</span>
          </Link>
        </div>
      </div>
    </div>
  );
}