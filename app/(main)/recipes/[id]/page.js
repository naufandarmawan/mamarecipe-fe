import React from 'react'
import Textarea from '@/components/base/textarea'
import Button from '@/components/base/button'
import Checkbox from '@/components/base/checkbox'



const ProductDetails = ({ params }) => {

  return (
    <div className='p-24 pt-48'>
      <div className='w-1/2 mx-auto flex flex-col gap-16 items-center'>

        <p className='font-medium text-7xl text-[#2E266F] text-center w-full'>Loream Sandwich</p>

        <div className='w-full bg-cover flex justify-end items-end h-96 p-4 rounded-2xl gap-2' style={{
          backgroundImage: `url('/recipe-thumbnail.png')`
        }}>

          <div>
            {/* <img className='' src='' /> */}
            {/* <Checkbox /> */}
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div>
            {/* <img className='' src='' /> */}
            {/* <Checkbox /> */}
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

        </div>

        <div className='w-full flex flex-col gap-8'>
          <p className='font-medium text-2xl text-[#3F3A3A]'>Ingredients</p>
          <p className='font-normal text-xl text-black'>
            - 2 eggs <br />
            - 2 tbsp mayonnaise <br />
            - 3 slices bread <br />
            - a little butter <br />
            - ⅓ carton of cress <br />
            - 2-3 slices of tomato or a lettuce leaf <br />
            and a slice of ham or cheese <br />
            - crisps , to serve <br />
          </p>
        </div>

        <div className='w-full flex flex-col gap-8'>
          <p className='font-medium text-2xl text-[#3F3A3A]'>Step-by-step</p>
          <p className='font-normal text-xl text-black'>
            - 2 eggs <br />
            - 2 tbsp mayonnaise <br />
            - 3 slices bread <br />
            - a little butter <br />
            - ⅓ carton of cress <br />
            - 2-3 slices of tomato or a lettuce leaf <br />
            and a slice of ham or cheese <br />
            - crisps , to serve <br />
          </p>
        </div>

        <div className='w-full flex flex-col gap-4 items-center'>

          <Textarea
            label=""
            className={"bg-[#F6F5F4] h-40 w-full"}
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

export default ProductDetails