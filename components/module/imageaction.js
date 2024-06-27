"use client"

import React, { useState } from 'react'
import { toast } from 'sonner'


const ImageAction = ({ image, params }) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const likeToggle = async () => {
        // setLiked(!liked);
        if (liked) {
            toast.warning('Recipe already liked');
        } else {
            await likeRecipe();
        }

    }

    const saveToggle = async () => {
        // setSaved(!saved);
        if (saved) {
            toast.warning('Recipe already saved');
        } else {
            await saveRecipe();
        }
    }

    const likeRecipe = async () => {
        try {
            const response = await fetch(`/v1/recipes/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recipe_id: `${params.id}` }),
                credentials: 'include'
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.statuCode === 401) {
                    setLiked(!liked);
                    toast.warning('Recipe already liked');
                } else {
                    throw new Error('Like recipe failed');
                }
            } else {
                setLiked(!liked);
                toast.success('Recipe liked');
            }
        } catch (err) {
            toast.error(err.message);
        }
    }

    const saveRecipe = async () => {
        try {
            const response = await fetch(`/v1/recipes/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recipe_id: `${params.id}` }),
                credentials: 'include'
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.statuCode === 401) {
                    setSaved(!saved);
                    toast.warning('Recipe already saved');
                } else {
                    throw new Error('Save recipe failed');
                }
            } else {
                setSaved(!saved);
                toast.success('Recipe saved');
            }
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className='w-full bg-cover flex justify-end items-end h-96 p-4 rounded-2xl gap-2' style={{
            backgroundImage: `url(${image || '/recipe-thumbnail.png'})`
        }}>

            <button
                className={`btn btn-square hover:bg-yellow-100 ${saved ? 'bg-yellow-500' : 'bg-white'}`}
                onClick={saveToggle}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${saved ? 'text-white' : 'text-yellow-500'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                </svg>
            </button>

            <button
                className={`btn btn-square hover:bg-yellow-100 ${liked ? 'bg-yellow-500' : 'bg-white'}`}
                onClick={likeToggle}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${liked ? 'text-white' : 'text-yellow-500'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                </svg>
            </button>

        </div>
    )
}

export default ImageAction