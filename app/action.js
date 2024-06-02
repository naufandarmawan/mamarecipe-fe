import { revalidateTag } from 'next/cache'
 
export async function handleRevalidate() {
  revalidateTag('recipe')
}