import Image from 'next/image'
import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import copyToClipboard from './copyToClipboard'
const Joke = ({data,keywords}) => {
  const [isCopied,setIsCopied ]=useState(-1);

  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:p-3 2xl:grid-cols-4'>
      {data?.map(({value,icon_url,id})=>{

        return <Fade bottom key={id}>
        <div className='relative p-2  md:m-3 group shadow-sm rounded group m-1 md:p-3 md:hover:text-teal-600 md:hover:shadow-2xl  transition-all duration-200 ease-in transform cursor-pointer group' >
        <p className=' p-2 md:group-hover:border-l-4 border-l-4 md:group-hover:border-yellow-500 transition-all duration-100 ease-in'>{value}</p>
        <p className='text-sm mt-3 md:opacity-0 md:group-hover:opacity-100 '>Keyword- <span className='text-pink-500'>{keywords}</span> </p>
            
            <div className='absolute bottom-0 right-2  ' onClick={()=>{
              copyToClipboard(value);
              setIsCopied(id);
              setTimeout(()=>setIsCopied(false),1000);
            }}>{isCopied===id && <small className='relative bottom-1 right-2 text-black font-bold'>copied</small>}
              <Image
                src={"/copy.png"}
                width={15}
                height={15}
                objectFit="contain"
              />
        </div>
        
      </div>
        </Fade>
      })}
    </div>
  )
}

export default Joke
