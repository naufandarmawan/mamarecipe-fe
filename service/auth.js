"use server"

import { cookies } from 'next/headers'

export const getCookie = (name) => {
    const result = cookies().get(name)?.value || ''
    // console.log('auth:', token);
    return result
}