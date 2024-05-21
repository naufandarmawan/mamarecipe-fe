import React from 'react'
import Input from '@/components/base/input'
import Button from '@/components/base/button'
import Checkbox from '@/components/base/checkbox'
import Link from 'next/link'



const Login = () => {
  return (
    <div className='flex'>

      <div className='w-1/2 flex flex-col justify-center items-center bg-cover' style={{
        backgroundImage: `url('/auth-background.png')`
      }}>
        <img className='w-32' src='/logo.svg' />
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center py-20'>
        <div className='w-1/2 flex flex-col gap-6'>
          <p className='text-center font-bold text-3xl text-[#EFC81A]'>Welcome</p>
          <p className='text-center font-normal text-lg text-[#8692A6]'>Log in into your exiting account</p>

          <div className='flex flex-col gap-4 w-full'>
            <Input
              label='Email'
              placeholder='Email'
            />
            <Input
              label='Password'
              placeholder='Password'
            />
            <Checkbox label="I agree to terms & conditions" />
          </div>

          <div className='flex flex-col gap-4 items-end'>
            <Button text="Log in" />
            <Link className='font-medium text-sm text-[#999999]' href="/forgot-password">Forgot Password?</Link>
          </div>

          <p className='text-center text-sm font-medium text-[#999999]'>Don’t have an account? <Link className='text-[#EFC81A]' href="/register">Sign Up</Link></p>
        </div>

      </div>

    </div>
  )
}

export default Login