"use client"

import React, { useEffect, useState } from 'react'
import Tabs from '@/components/base/tabs'
import Dropdown from '@/components/base/dropdown'
import Link from 'next/link'
import Card from '@/components/base/card'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const MyProfile = () => {

  const [myRecipe, setMyRecipe] = useState([])
  const [likedRecipe, setLikedRecipe] = useState([])
  const [savedRecipe, setSavedRecipe] = useState([])

  // const [params, setParams] = useState({
  //   limit: 80,
  //   page: 1,
  // })

  const [myProfile, setMyProfile] = useState({})

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('My Recipe');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getMyProfile = async () => {
    try {

      setLoading(true);

      const response = await fetch(`/v1/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get my profile failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      setMyProfile(res.data)

      // toast.success(`Get my profile success`)
      // console.log(res.data);

    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }
  }

  const getMyRecipe = async () => {

    try {

      setLoading(true);

      // const queryParams = new URLSearchParams({
      //   limit: params.limit,
      //   page: params.page,
      // });

      // const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;
      const url = `/v1/recipes/self`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get my recipes failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      // console.log(res);
      setMyRecipe(res.data)

      // toast.success(`Get recipes success`)
      // console.log(res.data);


    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }

  }

  const getLikedRecipe = async () => {

    try {

      setLoading(true);

      // const queryParams = new URLSearchParams({
      //   limit: params.limit,
      //   page: params.page,
      // });

      // const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;
      const url = `/v1/recipes/like`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get my liked recipes failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      // console.log(res);

      const recipes = res.data.map(item => item.recipe);
      setLikedRecipe(recipes);

      // toast.success(`Get recipes success`)
      // console.log(res.data);


    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }

  }

  const getSavedRecipe = async () => {

    try {

      setLoading(true);

      // const queryParams = new URLSearchParams({
      //   limit: params.limit,
      //   page: params.page,
      // });

      // const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;
      const url = `/v1/recipes/save`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get my saved recipes failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      // console.log(res);

      const recipes = res.data.map(item => item.recipe);
      setSavedRecipe(recipes);

      // toast.success(`Get recipes success`)
      // console.log(res.data);


    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getMyProfile()
    getMyRecipe()
    getLikedRecipe()
    getSavedRecipe()
  }, [])

  const router = useRouter()
  const handleNavigate = (id) => {
    router.push(`/recipes/${id}`)

  }

  return (
    <div>
      <div className=' flex flex-col items-center justify-center p-24 pt-48 max-lg:p-4 max-lg:pt-32'>

        <div className='flex flex-col gap-10'>

          <div className='flex items-end'>
            <img className='rounded-full size-44 bg-cover -mr-6' src='/user-thumbnail.png' />

            {/* <Dropdown /> */}

            <div className="dropdown dropdown-end">
              <img tabIndex={0} className='size-6' src='/edit.svg' />
              <ul tabIndex={0} className="dropdown-content z-[1] menu my-4 p-2 shadow text-center rounded-box w-52 bg-[#E7E7E7]">
                <li><label><input className='hidden' type="file" />Change Photo Profile</label></li>
                <li><Link className='' href='/forgot-password/reset-password'>Change Password</Link></li>
              </ul>
            </div>
          </div>

          <p className='font-medium text-2xl text-black text-center'>{myProfile.name || "Garneta Sharina"}</p>

        </div>

      </div>

      {/* <Tabs /> */}

      <div className='flex flex-col gap-8 py-24 max-lg:py-8'>
        <div role="tablist" className="tabs w-fit px-24 max-lg:px-4">
          <a
            role="tab"
            className={`tab font-medium text-2xl max-lg:text-xl ${activeTab === 'My Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('My Recipe')}
          >
            My Recipe
          </a>
          <a
            role="tab"
            className={`tab font-medium text-2xl max-lg:text-xl ${activeTab === 'Saved Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('Saved Recipe')}
          >
            Saved Recipe
          </a>
          <a
            role="tab"
            className={`tab font-medium text-2xl max-lg:text-xl ${activeTab === 'Liked Recipe' ? 'text-black tab-active' : 'text-[#666666]'}`}
            onClick={() => handleTabClick('Liked Recipe')}
          >
            Liked Recipe
          </a>
        </div>

        <div className='w-full h-[1px] bg-[#DFDFDF]'></div>

        {activeTab === 'My Recipe' && (
          <div className='grid grid-cols-4 gap-8 px-24 max-lg:px-4 max-lg:grid-cols-1'>
            {loading ? (
              <>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
              </>
            ) : myRecipe.length > 0 ? (
              <>
                {myRecipe.map((item) => (
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
          <div className='grid grid-cols-4 gap-8 px-24 max-lg:px-4 max-lg:grid-cols-1'>
            {loading ? (
              <>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
              </>
            ) : savedRecipe.length > 0 ? (
              <>
                {savedRecipe.map((item) => (
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
        {activeTab === 'Liked Recipe' && (
          <div className='grid grid-cols-4 gap-8 px-24 max-lg:px-4 max-lg:grid-cols-1'>
            {loading ? (
              <>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
                <div className="skeleton w-full h-64"></div>
              </>
            ) : likedRecipe.length > 0 ? (
              <>
                {likedRecipe.map((item) => (
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

      </div>

    </div>
  )
}

export default MyProfile