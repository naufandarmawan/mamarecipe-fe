import React from 'react'
import Textarea from '@/components/base/textarea'
import Button from '@/components/base/button'



const ProductDetails = ({ params }) => {

  return (
    <div className='p-24'>
      <div className='w-1/2 mx-auto flex flex-col gap-6 items-center'>
        ProductDetails - {params.id}

        <p className='font-medium text-7xl text-[#2E266F] text-center w-full'>Loream Sandwich</p>
        <div className='w-full'>

          <div>
            <img />
          </div>

          <div>
            <img />
          </div>

        </div>

        <div className='w-full'>
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

        <div className='w-full'>
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
            className={'bg-[#F6F5F4] w-full h-40'}
            placeholder='Comments'
          />

          <Button className='w-1/3' text='Post' />

        </div>

        <div className='w-full'>

          <p>Comment</p>

          <div>

            <img />

            <div>
              <p>Ayudia</p>
              <p>Nice recipe. simple and delicious, thankyou</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails