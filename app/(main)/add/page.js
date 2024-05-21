import React from 'react'
import Button from '@/components/base/button'
import Input from '@/components/base/input'
import Textarea from '@/components/base/textarea'
import FileInput from '@/components/base/file-input'



const AddRecipe = () => {
  return (
    <div className='p-24'>
      <div className='w-1/2 mx-auto flex flex-col gap-6 items-center'>
        <div className='flex flex-col gap-4 w-full'>
          <label className='w-full cursor-pointer p-20 bg-[#F6F5F4] rounded-lg border border-stone-300'>
            <input className='invisible' type="file" />
            <div className='w-full flex flex-col gap-6 items-center '>
              <img src="/add-photo.svg" />
              <p className='font-medium text-lg text-[#666666] text-center'>Add Photo</p>
            </div>
          </label>
          {/* <FileInput /> */}
          <Input
            label=""
            className={'bg-[#F6F5F4]'}
            placeholder='Title'
          />
          <Textarea
            label=""
            className={'bg-[#F6F5F4] w-full h-40'}
            placeholder='Ingridients'
          />
          <Textarea
            label=""
            className={'bg-[#F6F5F4] w-full h-40'}
            placeholder='Step by step'
          />
        </div>
        <Button className='w-1/3' text='Post' />
      </div>
    </div>
  )
}

export default AddRecipe