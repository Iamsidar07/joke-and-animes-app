import React from 'react'
import { Fade } from 'react-reveal'
const Joke = ({data,keywords}) => {
  
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:p-3 '>
      {data?.map(({value,icon_url,id})=>{
        return <Fade bottom key={id}>
        <div className='p-3 text-white md:m-3 group md:hover:shadow-md md:hover:border border-sky-500 bg-[#1e293b] rounded-md group m-1 md:p-3  sm:hover:scale-105 transition-all duration-200 ease-in transform cursor-pointer' >
        <p >{value}</p>
        <p className='text-sm font-bold text-gray-400 md:group-hover:text-gray-500 md:opacity-0 md:group-hover:opacity-100 '>Keyword- <span className='text-white'>{keywords}</span> </p>
      </div>
        </Fade>
      })}
    </div>
  )
}

export default Joke
