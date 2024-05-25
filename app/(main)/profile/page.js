"use client"

import React, { useEffect, useState } from 'react'
import Tabs from '@/components/base/tabs'
import Dropdown from '@/components/base/dropdown'
import Link from 'next/link'
import Card from '@/components/base/card'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const MyProfile = () => {

  const [recipe, setRecipe] = useState([])
  const [params, setParams] = useState({
    limit: 8,
    page: 1,
  })

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('My Recipe');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
    <div>
      <div className=' flex flex-col items-center justify-center p-24 pt-48'>

        <div className='flex flex-col gap-10'>

          <div className='flex items-end'>
            <img className='rounded-full size-44 bg-cover -mr-6' src='/user-thumbnail.png' />

            {/* <Dropdown /> */}

            <div className="dropdown dropdown-end">
              <img tabIndex={0} className='size-6' src='/edit.svg' />
              <ul tabIndex={0} className="dropdown-content z-[1] menu my-4 p-2 shadow text-center rounded-box w-52 bg-[#E7E7E7]">
                <li><a className='' href=''>Change Photo Profile</a></li>
                <li><a className='' href=''>Change Password</a></li>
              </ul>
            </div>
          </div>

          <p className='font-medium text-2xl text-black'>Garneta Sharina</p>

        </div>

      </div>

      {/* <Tabs /> */}

      <div className='flex flex-col gap-8 py-24'>
        <div role="tablist" className="tabs w-fit px-24">
          <a
            role="tab"
            className={`tab font-medium text-2xl ${activeTab === 'My Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('My Recipe')}
          >
            My Recipe
          </a>
          <a
            role="tab"
            className={`tab font-medium text-2xl ${activeTab === 'Saved Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('Saved Recipe')}
          >
            Saved Recipe
          </a>
          <a
            role="tab"
            className={`tab font-medium text-2xl ${activeTab === 'Liked Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('Liked Recipe')}
          >
            Liked Recipe
          </a>
        </div>

        <div className='w-full h-[1px] bg-[#DFDFDF]'></div>

        {activeTab === 'My Recipe' && (
          <div className='grid grid-cols-4 gap-8 px-24'>
            {loading ? (
              <>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
              </>
            ) : recipe.length > 0 ? (
              <>
                {recipe.map((item) => (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    onClick={() => handleNavigate(item.id)}
                  />
                ))}
              </>
            ) : (
              <p>No recipes found.</p>
            )}
          </div>
        )}
        {activeTab === 'Saved Recipe' && (
          <div className='grid grid-cols-4 gap-8 px-24'>
            <Card />
            <Card />
          </div>
        )}
        {activeTab === 'Liked Recipe' && (
          <div className='grid grid-cols-4 gap-8 px-24'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}

      </div>

    </div>
  )
}

export default MyProfile