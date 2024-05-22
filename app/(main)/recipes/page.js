import React from 'react'
import Card from '@/components/base/card'

const Recipes = () => {
  return (
    <div className='flex flex-col gap-16 p-24 pt-48'>

      <div className='flex gap-6 px-24 items-center'>
        <div className='w-6 h-24 bg-yellow-400' />
        <p className='font-medium text-5xl text-[#3F3A3A]'>All Recipe</p>
      </div>

      <div className="join px-24">
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="Search" />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <button className="btn join-item">Search</button>
      </div>

      <div className='grid grid-cols-3 gap-8 px-24'>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <div className='flex flex-col items-center px-24'>
        <div className="join">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>

    </div>
  )
}

export default Recipes