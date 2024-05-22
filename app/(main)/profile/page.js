import React from 'react'
import Tabs from '@/components/base/tabs'
import Dropdown from '@/components/base/dropdown'
import Link from 'next/link'

const MyProfile = () => {
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

      <Tabs />
      
    </div>
  )
}

export default MyProfile