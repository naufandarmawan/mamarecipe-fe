import React from 'react'
import Tabs from '@/components/base/tabs'
import Collapse from '@/components/base/collapse'
import Dropdown from '@/components/base/dropdown'

const MyProfile = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col'>
          <img className='rounded-full size-44 bg-cover' src='/user-thumbnail.png' />
          <img className='size-6' src='/edit.svg' />
        </div>
        <p className='font-medium text-2xl text-black'>Garneta Sharina</p>
      </div>

      <Collapse />
      <Dropdown />
      <>Change Photo Profile</>
      <>Change Password</>

      <p className='font-medium text-2xl text-black'>My Recipe</p>
      <p className='font-medium text-2xl text-[#666666]'>Saved Recipe</p>
      <p className='font-medium text-2xl text-[#666666]'>Liked Recipe</p>

      <Tabs />

      <div className='w-full h-[1px] bg-[#DFDFDF]'></div>

      <div className='grid grid-cols-4 gap-8'>

        <div className='w-full h-64 flex flex-col justify-end items-start p-6'>
          <p className='w-1/2 font-medium text-3xl text-white'>Bomb Chicken</p>
        </div>

        <div className='w-full h-64 flex flex-col justify-end items-start p-6'>
          <p className='w-1/2 font-medium text-3xl text-white'>Bomb Chicken</p>
        </div>

        <div className='w-full h-64 flex flex-col justify-end items-start p-6'>
          <p className='w-1/2 font-medium text-3xl text-white'>Bomb Chicken</p>
        </div>

        <div className='w-full h-64 flex flex-col justify-end items-start p-6'>
          <p className='w-1/2 font-medium text-3xl text-white'>Bomb Chicken</p>
        </div>

        <div className='w-full h-64 flex flex-col justify-end items-start p-6'>
          <p className='w-1/2 font-medium text-3xl text-white'>Bomb Chicken</p>
        </div>

      </div>
    </div>
  )
}

export default MyProfile