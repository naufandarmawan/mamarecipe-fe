"use client"

import React, { useEffect, useState } from 'react'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import Textarea from '@/components/base/textarea'
import { toast } from 'sonner'
import { useParams, useRouter } from 'next/navigation'

const EditRecipe = () => {
  const [recipe, setRecipe] = useState({})
  const [form, setForm] = useState({
    image: '',
    title: '',
    // ingridients: '',
    // steps: '',
    description: '',

  })

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const { id } = useParams()

  // console.log(id);

  const getRecipeDetails = async () => {

    try {

      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes/${id}`, {
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
      setForm(res.data)
      setRecipe(res.data)

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
    getRecipeDetails()
  }, [])

  const handleUpdate = async () => {
    try {

      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        // credentials: "include",
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Update recipe failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();

      toast.success(`Update recipe success`)
      router.push(`/recipes/${res.data.id}`)


    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }
  };

  const handleChange = (fieldName, value) => {
    setForm(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  }

  const handleUpload = async (e) => {
    try {
      setLoading(true);

      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`/v1/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Upload image failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();

      const { file_url } = res.data
      console.log(file_url);
      setForm({ ...form, image: file_url })
      console.log(form.image);

      toast.success(`Upload image success`)
    } catch (err) {

      setError(err.message);
      toast.error(error)

    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='p-24 pt-48 max-lg:p-4 max-lg:pt-32'>

      <div className='w-1/2 mx-auto flex flex-col gap-6 items-center max-lg:w-full'>

        <div className='flex gap-6 items-center w-full'>
          <div className='w-6 h-24 bg-yellow-400 max-lg:w-5 max-lg:h-20' />
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-5xl text-[#3F3A3A] max-lg:text-3xl'>Edit Recipe</p>
            <p className='font-medium text-xl text-[#3F3A3A]'>{recipe.title}</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full'>

          {/* <label className='w-full cursor-pointer p-20 bg-[#F6F5F4] rounded-lg border border-stone-300'>
            <input className='hidden' type="file" />
            <div className='w-full flex flex-col gap-6 items-center '>
              <img src="/add-photo.svg" />
              <p className='font-medium text-lg text-[#666666] text-center'>Add Photo</p>
            </div>
          </label> */}

          <label className='flex flex-col justify-center items-center w-full h-80 cursor-pointer p-20 bg-[#F6F5F4] rounded-lg border border-stone-300' style={{
            backgroundImage: `url('${form.image || ""}')`
          }}>
            <input className='hidden' type="file" onChange={handleUpload} />
            {loading ? (<div className='flex flex-col gap-2 items-center justify-center'>
              <span className="loading loading-spinner text-black"></span>
              <p className='font-medium text-sm text-black'>Loading</p>
            </div>
            ) : form.image ? (<div className='hidden'></div>) :
              (<div className={`w-full flex flex-col gap-6 items-center`}>
                <img src="/add-photo.svg" />
                <p className='font-medium text-lg text-[#666666] text-center'>Add Photo</p>
              </div>)
            }

          </label>

          {/* <Input
            type='text'
            value={form.image}
            onChange={(value) => handleChange('image', value)}
            name="image"
            label=''
            placeholder='Image URL'
            className={'bg-[#F6F5F4]'}
          /> */}

          {/* <FileInput /> */}

          <Input
            type='text'
            value={form.title}
            onChange={(value) => handleChange('title', value)}
            name="title"
            label=''
            placeholder='Title'
            className={'bg-[#F6F5F4]'}
          />
          <Textarea
            value={form.description}
            onChange={(value) => handleChange('description', value)}
            name="description"
            label=''
            placeholder='Ingridients'
            className={'bg-[#F6F5F4] w-full h-40'}
          />
          {/* <Textarea
            value={form.steps}
            onChange={(value) => handleChange('steps', value)}
            name="steps"
            label=''
            placeholder='Step by step'
            className={'bg-[#F6F5F4] w-full h-40'}
          /> */}
        </div>

        <Button text="Update" onClick={handleUpdate} className={'w-1/3 max-lg:w-1/2'} loading={loading} />

      </div>

    </div>
  )
}

export default EditRecipe