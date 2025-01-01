import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex justify-center bg-green-200'>
      <div className='h-[100px] w-[900px] bg-b justify-center items-center flex pt-[250px]'>
        <div className='flex gap-5'>
          <Link href="/client-side" ><h1 className='h-[100px] w-[400px] bg-teal-300 rounded justify-center flex items-center font-semibold text-[40px] text-white'>Client Side</h1></Link>
          <Link href="/server-side" ><h1 className='h-[100px] w-[400px] bg-teal-300 rounded justify-center flex items-center font-semibold text-[40px] text-white'>Server Side</h1></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
