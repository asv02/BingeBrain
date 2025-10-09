import React from 'react'
import { CDN_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='flex-shrink-0 snap-start w-28 md:w-36 lg:w-44'>
        <img 
          className='w-full h-auto rounded-md shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 ease-out'
          src={CDN_URL+posterPath} 
          alt='poster'
          loading='lazy'
        />
    </div>
  )
}

export default MovieCard