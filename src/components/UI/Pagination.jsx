import React from 'react'

const Pagination = ({ page, setPage }) => {
    return (
        <div className='flex justify-center gap-4 mt-6'>
            <button onClick={setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className='px-4 py-2 bg-gray-800 rounded disabled:opacity-50'
            >
                Prev

            </button>
            <button onClick={setPage((p) => p + 1)}
                disabled={page === 1}
                className='px-4 py-2 bg-gray-800 rounded'
            >
                Next
            </button>
        </div>
    )
}

export default Pagination