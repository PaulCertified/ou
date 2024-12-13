import { MapPin } from 'lucide-react';

interface MapProps {
  location: string;
}

export function Map({ location }: MapProps) {
  // Fallback to a default map style if no API key is available
  const mapContent = () => {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-6 w-6" />
          <span className="text-lg">{location}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {mapContent()}
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center">
        <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
        <span className="text-sm font-medium">{location}</span>
      </div>
    </div>
  );
}