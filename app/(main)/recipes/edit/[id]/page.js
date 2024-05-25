"use client"

import React, { useEffect, useState } from 'react'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import Textarea from '@/components/base/textarea'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const EditRecipe = ({ params }) => {
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
      setForm(res.data)

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

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/recipes/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
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

  return (
    <div className='p-24 pt-48'>

      <div className='w-1/2 mx-auto flex flex-col gap-6 items-center'>

        <div className='flex flex-col gap-4 w-full'>

          <label className='w-full cursor-pointer p-20 bg-[#F6F5F4] rounded-lg border border-stone-300'>
            <input className='invisible' type="file" />
            <div className='w-full flex flex-col gap-6 items-center '>
              <img src="/add-photo.svg" />
              <p className='font-medium text-lg text-[#666666] text-center'>Add Photo</p>
            </div>
          </label>

          <Input
            type='text'
            value={form.image}
            onChange={(value) => handleChange('image', value)}
            name="image"
            label=''
            placeholder='Image URL'
            className={'bg-[#F6F5F4]'}
          />

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

        <Button text="Post" onClick={handleUpdate} className={'w-1/3'} loading={loading} />

      </div>

    </div>
  )
}

export default EditRecipe