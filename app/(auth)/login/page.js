"use client"

import React, { useState } from 'react'
import Input from '@/components/base/input'
import Button from '@/components/base/button'
import Checkbox from '@/components/base/checkbox'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/authSlice';

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const { loading, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (fieldName, value) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handleLogin = () => {
    if (!termsChecked) {
      toast.error('Please agree to terms & conditions');
      return;
    }
    dispatch(loginUser(form))
      .unwrap()
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        toast.success(`Welcome ${res.data.name}`);
        router.push('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // const [form, setForm] = useState({
  //   email: '',
  //   password: '',
  // })
  // const [termsChecked, setTermsChecked] = useState(false);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  // const router = useRouter()

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };

  // const handleChange = (fieldName, value) => {
  //   setForm(prevState => ({
  //     ...prevState,
  //     [fieldName]: value
  //   }));
  // }

  // const handleCheckboxChange = (e) => {
  //   setTermsChecked(e.target.checked);
  // };

  // const handleLogin = async () => {
  //   try {

  //     if (!termsChecked) {
  //       // throw new Error('Please agree to terms & conditions');
  //       setError('Please agree to terms & conditions');
  //       toast.error(error)
  //       return
  //     }

  //     setLoading(true);

  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(form)
  //     });

  //     if (!response.ok) {
  //       // throw new Error('Login failed');
  //       setError('Login failed')
  //       toast.error(error)
  //       setLoading(false);
  //       return
  //     }

  //     const res = await response.json();

  //     const { token, refreshToken } = res.data
  //     localStorage.setItem('token', token)
  //     localStorage.setItem('refreshToken', refreshToken)

  //     toast.success(`${res.message} - Welcome ${res.data.name}`)
  //     console.log(res.data);
  //     router.push('/')


  //   } catch (err) {

  //     setError(err.message);
  //     toast.error(error)

  //   } finally {
  //     setLoading(false);
  //   }
  // };



  return (
    <div className='flex max-lg:flex-col'>

      <div className='w-1/2 flex flex-col justify-center items-center bg-cover max-lg:invisible max-lg:h-0' style={{
        backgroundImage: `url('/auth-background.png')`
      }}>
        <img className='w-32' src='/logo.svg' />
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center py-20 max-lg:w-full max-lg:p-4 max-lg:py-10'>
        <div className='w-1/2 flex flex-col gap-6 max-lg:w-full'>
          <p className='text-center font-bold text-3xl text-[#EFC81A]'>Welcome</p>
          <p className='text-center font-normal text-lg text-[#8692A6]'>Log in into your exiting account</p>

          <div className='flex flex-col gap-4 w-full'>
            <Input
              type='email'
              value={form.email}
              onChange={(value) => handleChange('email', value)}
              name="email"
              label='Email'
              placeholder='Enter email address'
              validations={{ email: validateEmail }}
            />
            <Input
              type='password'
              value={form.password}
              onChange={(value) => handleChange('password', value)}
              name="password"
              label='Password'
              placeholder='Password'
              validations={{ password: validatePassword }}
            />
            <Checkbox label="I agree to terms & conditions" checked={termsChecked} onChange={handleCheckboxChange} />
          </div>

          <div className='flex flex-col gap-4 items-end'>
            <Button text="Log in" onClick={handleLogin} className={'w-full'} loading={loading} />
            <Link className='font-medium text-sm text-[#999999]' href="/forgot-password">Forgot Password?</Link>
          </div>

          <p className='text-center text-sm font-medium text-[#999999]'>Don’t have an account? <Link className='text-[#EFC81A]' href="/register">Sign Up</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login