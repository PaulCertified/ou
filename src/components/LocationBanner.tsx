import { MapPin } from 'lucide-react';

export function LocationBanner() {
  return (
    <div className="bg-emerald-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-emerald-600" />
          <span className="text-sm font-medium">For you: Torrance, CA (30mi) + Shipping</span>
        </div>
        <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
          Change
        </button>
      </div>
    </div>
  );
}