import React, { useRef, useState } from 'react'
import openai from "../../utils/openai"
import {useNavigate} from "react-router-dom"

const GptSearchBar = () => {

    const searchText = useRef(null)

    const [error, setError] = useState('')

    const handleGptSearch = async () => {

            const gptQuery = "Act as a movie recommendation system an sugest some movies for the query: " + searchText.current.value + ". Only return names of 5 movies, comma separated like the example result given ahead. Example Result: Misery, Seven, Bhoothkalam, John Wick, Avesham"

          try{
              const gptResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            }); 

            console.log(gptResults.choices?.[0]?.message?.content )

            const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

          }
          catch(error){
            //console.log(error)
            setError(error)
          }
            
          }
    
         

  return (
    <>
    <div className='flex justify-center pt-[20%] pb-2 mb-2'>
        <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className='p-6 bg-black flex flex-row rounded-lg w-1/2'>
            <input ref={searchText} type='text' className='rounded-lg m-2 p-2 w-10/12' placeholder='What do you want to watch?' />
            <button className='bg-red-700 text-white rounded-lg m-2 p-2'
            onClick={handleGptSearch}
            >Search</button>
        </form>
        
    </div>
    {error && <div className='bg-red-500 rounded-xl text-black p-3 m-3'>
    <p className='font-bold text-2xl'>OOPS!!! Something went wrong</p>
    <p>{error.toString()}</p>
    </div>}
    </>
  )
}

export default GptSearchBar