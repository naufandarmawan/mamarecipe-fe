"use client"

import React, { useEffect, useState } from 'react'
import Textarea from '@/components/base/textarea'
import Button from '@/components/base/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


const RecipeDetails = ({ params }) => {
  const [recipeDetails, setRecipeDetails] = useState([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter()

  const getRecipeDetails = async () => {

    try {

      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Get recipe details failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      setRecipeDetails(res.data)

      // toast.success(`Get recipes details success`)
      // console.log(res.data);

    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // getTalent()
    getRecipeDetails()
  }, [])

  const toggleLike = () => {
    setLiked(!liked);
  }

  const toggleSave = () => {
    setSaved(!saved);
  }

  const handleUpdate = () => {
    router.push(`/recipes/edit/${params.id}`)
  }

  const handleDelete = async () => {
    try {

      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Delete recipe failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();
      setRecipeDetails(res.data)

      toast.success(`Delete recipe success`)
      console.log(res.data);
      router.push('/recipes')

    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='p-24 pt-48'>
      <div className='w-1/2 mx-auto flex flex-col gap-16 items-center'>

        {loading ? (
          <div className="skeleton w-full h-20"></div>
        ) : (
          <p className='font-medium text-7xl text-[#2E266F] text-center w-full'>{recipeDetails.title || "Title"}</p>
        )}

        <div className='w-full bg-cover flex justify-end items-end h-96 p-4 rounded-2xl gap-2' style={{
          backgroundImage: `url(${recipeDetails.image || '/recipe-thumbnail.png'})`
        }}>

          <button
            className={`btn btn-square hover:bg-yellow-100 ${saved ? 'bg-yellow-500' : 'bg-white'}`}
            onClick={toggleSave}
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${saved ? 'text-white' : 'text-yellow-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>

          <button
            className={`btn btn-square hover:bg-yellow-100 ${liked ? 'bg-yellow-500' : 'bg-white'}`}
            onClick={toggleLike}
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${liked ? 'text-white' : 'text-yellow-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </button>

        </div>

        <div className='w-full flex flex-col gap-8'>
          <p className='font-medium text-2xl text-[#3F3A3A]'>Ingridients</p>
          {loading ? (
            <div className="skeleton w-full h-20"></div>
          ) : (
            <div>
              {recipeDetails.description ? (
                recipeDetails.description.split('\n').map((line, index) => (
                  <p key={index} className='font-normal text-xl text-black'>
                    - {line}
                  </p>
                ))
              ) : (
                <p className='font-normal text-xl text-black'>Description</p>
              )}
            </div>
            // <p className='font-normal text-xl text-black'>
            //   {recipeDetails.description || "Description"}
            // </p>
          )}

        </div>

        <div className='w-full flex flex-col gap-8'>
          <p className='font-medium text-2xl text-[#3F3A3A]'>Step-by-step</p>
          <p className='font-normal text-xl text-black'>
            - 2 eggs <br />
            - 2 tbsp mayonnaise <br />
            - 3 slices bread <br />
            - a little butter <br />
            - ⅓ carton of cress <br />
            - 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese <br />
            - crisps , to serve <br />
          </p>
        </div>

        <div className='flex gap-2 w-full'>
          <Button text="Edit" className='btn btn-outline btn-info bg-transparent' onClick={handleUpdate} />
          <Button text="Delete" className='btn btn-outline btn-error bg-transparent' onClick={handleDelete} loading={loading} />
        </div>

        <div className='w-full flex flex-col gap-4 items-center'>

          <Textarea
            label=""
            className={"bg-[#F6F5F4] h-40 "}
            placeholder='Comments'
          />

          <Button className='w-1/3' text='Post' />

        </div>

        <div className='w-full flex flex-col gap-10'>

          <p className='font-medium text-2xl text-[#3F3A3A]'>Comment</p>

          <div className='flex gap-8'>

            <img className='size-16' src='/user-thumbnail.png' />

            <div className='flex flex-col gap-1'>
              <p className='font-medium text-2xl text-black'>Ayudia</p>
              <p className='font-medium text-xl text-black'>Nice recipe. simple and delicious, thankyou</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default RecipeDetails