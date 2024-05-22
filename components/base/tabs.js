import React from 'react'

const Tabs = () => {
    return (
        <div role="tablist" className="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Recipe" checked />
            <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Saved Recipe"  />
            <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Liked Recipe" />
            <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
        </div>
    )
}

export default Tabs