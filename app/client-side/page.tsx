
"use client";

import React from 'react'
import { useEffect, useState } from 'react' ;

interface ITodo{
  id:number;
  title: string;
  description: string;
  price: number;
  image: string;
  userId: number;
}

const clientSide = () => {
  const [products, setProducts] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean[]>([]);

  useEffect(()=> {
    const dataFromApi = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const paresdResponse: ITodo[] = await response.json();
      console.log("todos >>>", paresdResponse);
      setProducts(paresdResponse);
    }
    dataFromApi();
    
  }, []);

  return (
    <div>
      <h1 className='font-bold text-center text-[50px] underline'>Product List</h1>
      {products.map((todo, index) => (
        <div key={index} className='flex flex-col gap-5 border border-black hover:shadow-xl'>
          <p>userId: {todo.userId}</p>
          <p>Id: {todo.id}</p>
          <p>title: {todo.title}</p>
        </div>
      ))}
    </div>
  )
}

export default clientSide;
