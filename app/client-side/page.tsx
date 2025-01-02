'use client';

import { useEffect, useState } from 'react';

interface ITodo {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string;
};

const Page = () => {
  const [products, setProducts] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: ITodo[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-sm hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title} 
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-black">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
