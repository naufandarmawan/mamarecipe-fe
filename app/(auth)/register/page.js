"use client"

import React, { useState } from 'react'
import Input from '@/components/base/input'
import Button from '@/components/base/button'
import Checkbox from '@/components/base/checkbox'
import Link from 'next/link'


const Register = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [termsChecked, setTermsChecked] = useState(false);

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handleRegister = async () => {
    try {
      if (form.password !== form.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (!termsChecked) {
        throw new Error('Please agree to terms & conditions');
      }

      const { confirmPassword, ...dataToSend } = form;

      const response = await fetch(`https://pijar-mama-recipe.vercel.app/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      console.log("Register success");

      // Registration successful, redirect or handle success
    } catch (err) {
      console.log(err.response);
      const error = err.response.data
      alert(`Register failed - ${error.message}`)
      // setError(error.message);
    }
  };

  return (
    <div className='flex'>

      <div className='w-1/2 flex flex-col justify-center items-center bg-cover' style={{
        backgroundImage: `url('/auth-background.png')`
      }}>
        <img className='w-32' src='/logo.svg' />
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center py-20'>
        <div className='w-1/2 flex flex-col gap-6'>
          <p className='text-center font-bold text-3xl text-[#EFC81A]'>Let’s Get Started!</p>
          <p className='text-center font-normal text-lg text-[#8692A6]'>Create new account to access all features</p>

          <div className='flex flex-col gap-4 w-full'>
            <Input
              type='text'
              value={form.name}
              onChange={handleChange}
              name="name"
              label='Name'
              placeholder='Name'
            />
            <Input
              type='email'
              value={form.email}
              onChange={handleChange}
              name="email"
              label='Email'
              placeholder='Enter email address'
            />
            <Input
              type='tel'
              value={form.phone}
              onChange={handleChange}
              name="phone"
              label='Phone Number'
              placeholder='08xxxxxxxxxx'
            />
            <Input
              type='password'
              value={form.password}
              onChange={handleChange}
              name="password"
              label='Create New Password'
              placeholder='Create New Password'
            />
            <Input
              type='password'
              value={form.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              label='New Password'
              placeholder='New Password'
            />
            <Checkbox label="I agree to terms & conditions" checked={termsChecked} onChange={handleCheckboxChange} />
          </div>

          <div className='flex flex-col gap-4 items-end'>
            <Button text="Register Account" onClick={handleRegister} className={'w-full'} />
          </div>

          <p className='text-center text-sm font-medium text-[#999999]'>Already have account? <Link className='text-[#EFC81A]' href="/login">Log in Here</Link></p>
        </div>

      </div>

    </div>
  )
}

export default Register