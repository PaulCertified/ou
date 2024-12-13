import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Mac Mini M1',
    price: 499,
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?auto=format&fit=crop&w=800',
    location: 'Torrance, CA',
    seller: { name: 'John Doe', rating: 4.5 },
    description: 'Like new Mac Mini M1, includes original box and accessories. 8GB RAM, 256GB SSD.',
    condition: 'Like New',
    category: 'Electronics',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Nike Air Jordan 4',
    price: 280,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?auto=format&fit=crop&w=800',
    location: 'Carson, CA',
    seller: { name: 'Jane Smith', rating: 4.8 },
    description: 'Brand new Jordan 4 Retro, never worn. Size 10.5 US.',
    condition: 'New',
    category: 'Shoes',
    createdAt: '2024-03-14'
  },
  {
    id: '3',
    title: 'iPhone 14 Pro',
    price: 799,
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800',
    location: 'Long Beach, CA',
    seller: { name: 'Mike Wilson', rating: 4.7 },
    description: '128GB, Space Black, unlocked and in perfect condition.',
    condition: 'Excellent',
    category: 'Electronics',
    createdAt: '2024-03-13'
  },
  {
    id: '4',
    title: 'Sony PS5 Console',
    price: 450,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800',
    location: 'Gardena, CA',
    seller: { name: 'Chris Brown', rating: 4.9 },
    description: 'Disc version, includes controller and all cables.',
    condition: 'Good',
    category: 'Gaming',
    createdAt: '2024-03-12'
  },
  {
    id: '5',
    title: 'Vintage Leather Jacket',
    price: 120,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800',
    location: 'Torrance, CA',
    seller: { name: 'Sarah Lee', rating: 4.6 },
    description: 'Genuine leather jacket, size M, minimal wear.',
    condition: 'Good',
    category: 'Clothing',
    createdAt: '2024-03-11'
  },
  {
    id: '6',
    title: 'Herman Miller Aeron Chair',
    price: 550,
    image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?auto=format&fit=crop&w=800',
    location: 'Redondo Beach, CA',
    seller: { name: 'Tom Garcia', rating: 4.4 },
    description: 'Size B, fully loaded with lumbar support and adjustable arms.',
    condition: 'Like New',
    category: 'Furniture',
    createdAt: '2024-03-10'
  },
  {
    id: '7',
    title: 'MacBook Pro 16"',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800',
    location: 'Manhattan Beach, CA',
    seller: { name: 'Alex Kim', rating: 5.0 },
    description: 'M1 Pro, 16GB RAM, 512GB SSD, AppleCare+ until 2025.',
    condition: 'Excellent',
    category: 'Electronics',
    createdAt: '2024-03-09'
  },
  {
    id: '8',
    title: 'Canon EOS R5',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800',
    location: 'Hermosa Beach, CA',
    seller: { name: 'David Chen', rating: 4.9 },
    description: 'Like new condition, includes 24-70mm f/2.8 lens.',
    condition: 'Like New',
    category: 'Electronics',
    createdAt: '2024-03-08'
  },
  {
    id: '9',
    title: 'Specialized Road Bike',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800',
    location: 'El Segundo, CA',
    seller: { name: 'Lisa Park', rating: 4.7 },
    description: '56cm frame, Shimano 105 groupset, excellent condition.',
    condition: 'Good',
    category: 'Sports',
    createdAt: '2024-03-07'
  },
  {
    id: '10',
    title: 'LG 65" OLED TV',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800',
    location: 'Torrance, CA',
    seller: { name: 'Robert Taylor', rating: 4.8 },
    description: '2023 model, perfect condition, includes wall mount.',
    condition: 'Like New',
    category: 'Electronics',
    createdAt: '2024-03-06'
  }
];