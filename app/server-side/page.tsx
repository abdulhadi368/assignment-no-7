import React from 'react'

interface ITodo{
  id:number;
  title: string;
  description: string;
  price: number;
  image: string;
  userId: number;
}

const clientSide = async () => {
  const url = await fetch ("https://simple-books-api.glitch.me/books/")
  const data: ITodo[] = await url.json();

  return (
    <div>
      <h1 className='font-bold text-center text-[50px] underline'>Product List</h1>
      {data.map((todo, index) => (
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
