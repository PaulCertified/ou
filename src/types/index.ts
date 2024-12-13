export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  seller: {
    name: string;
    rating: number;
  };
  description: string;
  condition: string;
  category: string;
  createdAt: string;
}