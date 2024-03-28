import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='pt-28 px-12 m-4'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='m-1 p-1 text-lg bg-white border border-black rounded-md w-24 opacity'>▶ Play</button>
            <button className='m-1 p-1 px-2 text-lg bg-gray-400 opacity-80 text-white w-32 rounded-md'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle