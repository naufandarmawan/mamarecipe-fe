import React from 'react'
import Card from '@/components/base/card'
import Button from '@/components/base/button'
import Input from '@/components/base/input'

const Home = () => {
  return (
    <div className='flex flex-col gap-32'>

      {/* <section className='flex -mb-16'>

        <div className='w-1/2 flex flex-col justify-center p-24'>
          <p className='font-medium text-7xl text-[#2E266F]'>Discover Recipe & Delicious Food</p>
          <p>Search</p>
        </div>

        <div className='w-1/2 flex'>
          <img className='w-1/2 h-full ml-[25%] py-24 pb-48 -mr-[25%] z-0' src='/hero-image.png' />
          <div className='bg-yellow-400 w-full h-full'></div>
        </div>

      </section> */}

      <section className='flex flex-col gap-20 -mb-48'>

        <div className='flex w-full'>

          <div className='w-1/2 flex flex-col gap-8 justify-center p-24'>
            <p className='font-medium text-7xl text-[#2E266F]'>Discover Recipe & Delicious Food</p>
            <Input
              className={'bg-[#EFEFEF]'}
              placeholder='Search'
              icon={true}
            />
          </div>

          <div className='w-1/2 flex justify-end pl-24'>
            <img className='' src="/hero-image-2.png" />
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20'>

        <div className='flex gap-6 px-24 items-center'>
          <div className='w-6 h-24 bg-yellow-400' />
          <p className='font-medium text-5xl text-[#3F3A3A]'>Popular For You!</p>
        </div>

        <div className='flex w-full'>

          <div className='w-1/2 flex'>
            <img className='' src="/popular-image.png" />
          </div>

          <div className='w-1/2 flex flex-col gap-8 px-24 justify-center'>
            <p className='font-medium text-6xl text-[#3F3A3A]'>Healthy Bone Broth Ramen (Quick & Easy)</p>
            <div className='w-28 h-[1px] bg-yellow-900'></div>
            <p className='font-medium text-2xl text-[#3F3A3A]'>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <Button
              text='Learn More'
              className={'w-40'}
            />
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20'>

        <div className='flex gap-6 px-24 items-center'>
          <div className='w-6 h-24 bg-yellow-400' />
          <p className='font-medium text-5xl text-[#3F3A3A]'>New Recipe</p>
        </div>

        <div className='flex w-full'>

          <div className='w-1/2 flex'>
            <img className='' src="/new-image.png" />
          </div>

          <div className='w-1/2 flex flex-col gap-8 px-24 justify-center'>
            <p className='font-medium text-6xl text-[#3F3A3A]'>Healthy Bone Broth Ramen (Quick & Easy)</p>
            <div className='w-28 h-[1px] bg-yellow-900'></div>
            <p className='font-medium text-2xl text-[#3F3A3A]'>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <Button
              text='Learn More'
              className={'w-40'}
            />
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20 pb-20'>

        <div className='flex gap-6 px-24 items-center'>
          <div className='w-6 h-24 bg-yellow-400' />
          <p className='font-medium text-5xl text-[#3F3A3A]'>Popular Recipe</p>
        </div>

        <div className='grid grid-cols-3 gap-8 px-24'>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </section>

    </div>
  )
}

export default Home