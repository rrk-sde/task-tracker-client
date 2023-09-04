import React from 'react'

const SingleTaskLoader = () => {
    return (
        <div className={`flex gap-8 border border-amber-900 p-4 h-36 min-w-[340px] justify-between`}>
            <div className='skeleton-title'></div>
            <div className='skeleton-content'></div>
            <div className='skeleton-created-by'></div>
        </div>
    )
}

export default SingleTaskLoader