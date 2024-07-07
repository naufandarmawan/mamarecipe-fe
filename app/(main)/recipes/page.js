"use client"

import React, { useEffect, useState } from 'react'
import Card from '@/components/base/card'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import useRecipeStore from '../../../store/useRecipeStore';

const Recipes = () => {

  const {
    recipe,
    params,
    searchInput,
    selectedSort,
    selectedSortBy,
    error,
    loading,
    setRecipe,
    setParams,
    setSearchInput,
    setSelectedSort,
    setSelectedSortBy,
    setError,
    setLoading,
    getRecipe
  } = useRecipeStore();

  useEffect(() => {
    getRecipe();
  }, [params]);

  const router = useRouter();
  const handleNavigate = (id) => {
    router.push(`/recipes/${id}`);
  };

  const handlePrevious = () => {
    setParams({ page: params.page - 1 });
  };

  const handleNext = () => {
    setParams({ page: params.page + 1 });
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setParams({ search: searchInput || '', sort: selectedSort, sortBy: selectedSortBy });
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
  };

  const handleSortByChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSortBy(selectedValue);
  };


  return (
    <div className='flex flex-col gap-16 p-24 pt-48 max-lg:p-4 max-lg:pt-32 max-lg:gap-6'>

      <div className='flex gap-6 items-center'>
        <div className='w-6 h-24 bg-yellow-400 max-lg:w-5 max-lg:h-16' />
        <p className='font-medium text-5xl text-[#3F3A3A] max-lg:text-3xl'>All Recipe</p>
      </div>

      <div className="join">
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="Search" onChange={handleSearchInputChange} value={searchInput} name='search' />
          </div>
        </div>
        <select className="select select-bordered join-item" value={selectedSort} onChange={handleSortChange}>
          <option value={''} selected>Sort</option>
          <option value={'title'}>Title</option>
          <option value={'created_at'}>Created At</option>
        </select>
        <select className="select select-bordered join-item" value={selectedSortBy} onChange={handleSortByChange}>
          <option value={''} selected>Sort By</option>
          <option value={'asc'}>Ascending</option>
          <option value={'desc'}>Descending</option>
        </select>
        <button className="btn join-item" onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1 max-lg:px-4'>
          <div className="skeleton w-full h-64"></div>
          <div className="skeleton w-full h-64"></div>
          <div className="skeleton w-full h-64"></div>
        </div>
      ) : recipe.length > 0 ? (
        <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
          {recipe.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}

      <div className='flex flex-col items-center'>
        <div className="join">
          <button className="join-item btn" onClick={handlePrevious}>«</button>
          <button className="join-item btn">Page {params.page}</button>
          <button className="join-item btn" onClick={handleNext}>»</button>
        </div>
      </div>

    </div>
  )
}

export default Recipes