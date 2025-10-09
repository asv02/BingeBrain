import React from 'react'
import GptSearchBar from './GptSearchBar'

function GptSearch() {
  return (
    <div className='bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center pt-[5vh]'>
      <div className='w-full max-w-4xl px-4'>
        <GptSearchBar/>
      </div>
    </div>
  )
}

export default GptSearch