"use client"

import React, { useEffect, useState } from 'react'
import Card from '@/components/base/card'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const Home = () => {

  const [recipe, setRecipe] = useState([])
  const [params, setParams] = useState({
    limit: 6,
    page: 1,
  })
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getRecipe = async () => {

    try {

      setLoading(true);

      const queryParams = new URLSearchParams({
        limit: params.limit,
        page: params.page,
      });

      const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get recipes failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      setRecipe(res.data)

      toast.success(`Get recipes success`)
      console.log(res.data);


    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    // getTalent()
    getRecipe()
  }, [])

  const router = useRouter()
  const handleNavigate = (id) => {
    router.push(`/recipes/${id}`)

  }

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

        {/* <div className='grid grid-cols-3 gap-8 px-24'> */}

        {loading ? (
          <div className='grid grid-cols-3 gap-8 px-24'>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-8 px-24'>
            {recipe.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() => handleNavigate(item.id)}
              />
            ))}
          </div>
        )}

        {/* </div> */}

      </section>

    </div>
  )
}

export default Home