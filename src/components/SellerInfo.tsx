interface SellerInfoProps {
  name: string;
  rating: number;
  joinDate?: string;
}

export function SellerInfo({ name, rating, joinDate }: SellerInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xl font-semibold text-gray-600">
          {name.charAt(0)}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-1">★</span>
          <span>{rating} rating</span>
          {joinDate && (
            <>
              <span className="mx-2">•</span>
              <span>Member since {joinDate}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}