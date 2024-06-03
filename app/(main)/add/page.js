"use client"

import React, { useState } from 'react'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import Textarea from '@/components/base/textarea'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


const AddRecipe = () => {
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

  const handleAdd = async () => {
    try {

      setLoading(true);

      const response = await fetch(`/v1/recipes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError('Add recipe failed')
        toast.error(error)
        setLoading(false);
        return
      }

      const res = await response.json();

      toast.success(`Add recipe success`)
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

        <div className='flex flex-col gap-4 w-full'>

          {/* {form.image && <img src={form.image} />} */}
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

        <Button text="Post" onClick={handleAdd} className={'w-1/3 max-lg:w-1/2'} loading={loading} />

      </div>

    </div>
  )
}

export default AddRecipe