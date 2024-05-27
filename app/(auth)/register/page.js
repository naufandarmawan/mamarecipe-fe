"use client"

import React, { useState } from 'react'
import Input from '@/components/base/input'
import Button from '@/components/base/button'
import Checkbox from '@/components/base/checkbox'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/authSlice';

const Register = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [termsChecked, setTermsChecked] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
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

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (!termsChecked) {
      toast.error('Please agree to terms & conditions');
      return;
    }
    dispatch(registerUser(form))
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        router.push('/login');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  //   confirmPassword: '',
  // })

  // const [termsChecked, setTermsChecked] = useState(false);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  // const router = useRouter()

  const validateName = (value) => {
    if (!value) {
      return 'Name is required';
    }
    if (value.length < 4) {
      return 'Name must be at least 4 characters';
    }
    return '';
  };

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePhone = (value) => {
    if (!value) {
      return 'Phone number is required';
    }
    if (!/^\d{10,15}$/.test(value)) {
      return 'Invalid phone number';
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

  const validateConfirmPassword = (value) => {
    if (!value) {
      return 'Confirmation password is required';
    }
    if (value !== form.password) {
      return 'Passwords do not match';
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

  // const handleRegister = async () => {
  //   try {

  //     if (form.password !== form.confirmPassword) {
  //       setError('Passwords do not match');
  //       toast.error(error)
  //       return
  //     }

  //     if (!termsChecked) {
  //       // throw new Error('Please agree to terms & conditions');
  //       setError('Please agree to terms & conditions');
  //       toast.error(error)
  //       return
  //     }

  //     const { confirmPassword, ...dataToSend } = form;

  //     setLoading(true);

  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth/register`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(dataToSend)
  //     });

  //     if (!response.ok) {
  //       // throw new Error('Registration failed');
  //       setError('Registration failed')
  //       toast.error(error)
  //       setLoading(false);
  //       return
  //     }

  //     const res = await response.json();

  //     toast.success(`${res.message}`)
  //     console.log(res.data);
  //     router.push('/login')

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
        <Link href='/'><img className='w-32' src='/logo.svg' /></Link>
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center py-20 max-lg:w-full max-lg:p-4 max-lg:py-10'>
        <div className='w-1/2 flex flex-col gap-6 max-lg:w-full'>
          <p className='text-center font-bold text-3xl text-[#EFC81A]'>Let’s Get Started!</p>
          <p className='text-center font-normal text-lg text-[#8692A6]'>Create new account to access all features</p>

          <div className='flex flex-col gap-4 w-full'>
            <Input
              type='text'
              value={form.name}
              onChange={(value) => handleChange('name', value)}
              name="name"
              label='Name'
              placeholder='Name'
              validations={{ name: validateName }}
            />
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
              type='tel'
              value={form.phone}
              onChange={(value) => handleChange('phone', value)}
              name="phone"
              label='Phone Number'
              placeholder='08xxxxxxxxxx'
              validations={{ phone: validatePhone }}
            />
            <Input
              type='password'
              value={form.password}
              onChange={(value) => handleChange('password', value)}
              name="password"
              label='Create New Password'
              placeholder='Create New Password'
              validations={{ password: validatePassword }}
            />
            <Input
              type='password'
              value={form.confirmPassword}
              onChange={(value) => handleChange('confirmPassword', value)}
              name="confirmPassword"
              label='New Password'
              placeholder='New Password'
              validations={{ confirmPassword: validateConfirmPassword }}
            />
            <Checkbox label="I agree to terms & conditions" checked={termsChecked} onChange={handleCheckboxChange} />
          </div>

          <div className='flex flex-col gap-4 items-end'>
            <Button text="Register Account" onClick={handleRegister} className={'w-full'} loading={loading} />
          </div>

          <p className='text-center text-sm font-medium text-[#999999]'>Already have account? <Link className='text-[#EFC81A]' href="/login">Log in Here</Link></p>
        </div>

      </div>

    </div>
  )
}

export default Register