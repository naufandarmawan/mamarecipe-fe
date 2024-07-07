// "use client"

// import React, { useEffect, useState } from 'react'
import React from 'react'
import Card from '@/components/base/card'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
import Link from 'next/link'
// import { getRecipe } from '@/service/recipes'

const Home = async () => {

  // const [recipe, setRecipe] = useState([])
  // const [params, setParams] = useState({
  //   limit: 6,
  //   page: 1,
  // })
  // // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  // const getRecipe = async () => {

  //   try {

  //     // setLoading(true);

  //     // const queryParams = new URLSearchParams({
  //     //   limit: params.limit,
  //     //   page: params.page,
  //     // });

  //     // const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;

  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes?limit=6`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     if (!response.ok) {
  //       // throw new Error('Login failed');
  //       // setError('Get recipes failed')
  //       // toast.error(error)
  //       toast.error('Get recipes failed')
  //       // setLoading(false);
  //       return
  //     }

  //     // const res = await response.json();
  //     // setRecipe(res.data)

  //     const { data } = await response.json();

  //     toast.success(`Get recipes success`)

  //     return data

  //   } catch (err) {

  //     // setError(err.message);
  //     // toast.error(error)

  //     toast.error(err.message)

  //   } finally {
  //     // setLoading(false);
  //   }

  // }

  // const { data } = await getRecipe()

  // console.log(data);

  // useEffect(() => {
  //   // getTalent()
  //   getRecipe()
  // }, [])

  // const router = useRouter()
  // const handleNavigate = (id) => {
  //   router.push(`/recipes/${id}`)

  // }

  const getRecipeHome = async () => {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes?page=4&limit=6&sort=created_at&sortBy=desc`, {
        method: 'GET',
        cache: 'force-cache'

      });

      if (!response.ok) {
        throw new Error('Get recipes failed')
      }

      const result = await response.json();

      return result

    } catch (err) {
      return Promise.reject(err.message);

    }
  }

  const { data } = await getRecipeHome()
  // const data = result.data

  return (
    <div className='flex flex-col gap-32 max-lg:pt-32'>

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

      <section className='flex flex-col gap-20 -mb-48 max-lg:-mb-24'>

        <div className='flex w-full max-lg:flex-col'>

          <div className='w-1/2 flex flex-col gap-8 justify-center p-24 max-lg:w-full max-lg:p-4 max-lg:-mb-8 max-lg:z-10'>
            <p className='font-medium text-7xl text-[#2E266F] max-lg:text-5xl'>Discover Recipe & Delicious Food</p>
            <Link href='/recipes'>
              <Input
                className={'bg-[#EFEFEF]'}
                placeholder='Search'
                icon={true}
              />
            </Link>
          </div>

          <div className='w-1/2 flex justify-end pl-24 max-lg:w-full max-lg:pl-4'>
            <img src="/hero-image-2.png" />
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20 max-lg:gap-10'>

        <div className='flex gap-6 px-24 items-center max-lg:p-4'>
          <div className='w-6 h-24 bg-yellow-400 max-lg:w-5 max-lg:h-16' />
          <p className='font-medium text-5xl text-[#3F3A3A] max-lg:text-3xl'>Popular For You!</p>
        </div>

        <div className='flex w-full max-lg:flex-col'>

          <div className='w-1/2 flex max-lg:w-full' >
            <img src="/popular-image.png" />
          </div>

          <div className='w-1/2 flex flex-col gap-8 px-24 justify-center max-lg:p-4 max-lg:w-full'>
            <p className='font-medium text-6xl text-[#3F3A3A] max-lg:text-4xl'>Most Popular Recipes Just for You!</p>
            <div className='w-28 h-[1px] bg-yellow-900'></div>
            <p className='font-medium text-2xl text-[#3F3A3A] max-lg:text-xl'>This quick and easy dish is perfect for a healthy and delicious meal in no time! With rich flavors and nutritious ingredients, it's a popular choice for a reason.</p>
            <Link href='/recipes'>
              <Button
                text='Learn More'
                className={'w-40'}
              />
            </Link>
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20 max-lg:gap-10'>

        <div className='flex gap-6 px-24 items-center max-lg:p-4'>
          <div className='w-6 h-24 bg-yellow-400 max-lg:w-5 max-lg:h-16' />
          <p className='font-medium text-5xl text-[#3F3A3A] max-lg:text-3xl'>New Recipe</p>
        </div>

        <div className='flex w-full max-lg:flex-col'>

          <div className='w-1/2 flex max-lg:w-full'>
            <img src="/new-image.png" />
          </div>

          <div className='w-1/2 flex flex-col gap-8 px-24 justify-center max-lg:p-4 max-lg:w-full'>
            <p className='font-medium text-6xl text-[#3F3A3A] max-lg:text-4xl'>Discover Our Latest Recipes</p>
            <div className='w-28 h-[1px] bg-yellow-900'></div>
            <p className='font-medium text-2xl text-[#3F3A3A] max-lg:text-xl'>Try our newest recipe - It's a perfect blend of taste and health, making it an ideal choice for a quick meal.</p>
            <Link href='/recipes'>
              <Button
                text='Learn More'
                className={'w-40'}
              />
            </Link>
          </div>

        </div>

      </section>

      <section className='flex flex-col gap-20 pb-20 max-lg:gap-10'>

        <div className='flex gap-6 px-24 items-center max-lg:p-4'>
          <div className='w-6 h-24 bg-yellow-400 max-lg:w-5 max-lg:h-16' />
          <p className='font-medium text-5xl text-[#3F3A3A] max-lg:text-3xl'>Popular Recipe</p>
        </div>

        {/* <div className='grid grid-cols-3 gap-8 px-24'> */}

        {/* {loading ? (
          <div className='grid grid-cols-3 gap-8 px-24 max-lg:grid-cols-1 max-lg:px-4'>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-8 px-24 max-lg:grid-cols-1 max-lg:px-4'>
            {recipe.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() => handleNavigate(item.id)}
              />
            ))}
          </div>
        )} */}

        {/* {loading ? (
          <div className='grid grid-cols-3 gap-8 px-24 max-lg:grid-cols-1 max-lg:px-4'>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
            <div className="skeleton w-full h-64"></div>
          </div>
        ) : ( */}
        <div className='grid grid-cols-3 gap-8 px-24 max-lg:grid-cols-1 max-lg:px-4'>
          {data.map((item) => (
            <Link href={`/recipes/${item.id}`} key={item.id}>
              <Card
                image={item.image}
                title={item.title}
              // onClick={() => handleNavigate(item.id)}
              />
            </Link>
          ))}
        </div>
        {/* )} */}

        {/* </div> */}

      </section>

    </div>
  )
}

export default Home