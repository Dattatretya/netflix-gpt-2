import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video pt-28 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-3/4'>{overview}</p>
        <div className=''>
            <button className='m-1 p-1 text-lg text-black bg-white border border-black rounded-md w-24 hover:bg-opacity-85'>▶ Play</button>
            <button className='m-1 p-1 px-2 text-lg bg-gray-600 opacity-90 hover:bg-opacity-85 text-white w-32 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle