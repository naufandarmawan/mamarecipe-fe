import React from 'react'
import Card from '@/components/base/card'

const Tabs = () => {
    return (
        <div className='flex flex-col gap-8 py-24'>

            <div role="tablist" className="tabs w-fit px-24">
                <a role="tab" className="tab tab-active font-medium text-2xl text-black">My Recipe</a>
                <a role="tab" className="tab font-medium text-2xl text-[#666666]">Saved Recipe</a>
                <a role="tab" className="tab font-medium text-2xl text-[#666666]">Liked Recipe</a>
            </div>

            <div className='w-full h-[1px] bg-[#DFDFDF]'></div>

            <div className='grid grid-cols-4 gap-8 px-24'>

                <Card />
                <Card />
                <Card />

            </div>

        </div>
    )
}

export default Tabs