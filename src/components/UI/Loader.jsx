import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className='animate-spin rounded-full h-8 w-8 border-pink-500'></div>
        </div>
    )
}

export default Loader