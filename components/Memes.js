import React, { useState } from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal';
import CustomImage from './CustomImage';
const Memes = ({memes}) => {
  const[load,setLoad]=useState(true);
  let topMemes=[];
  for (let index = 0; index < 100; index++) {
    const element = memes[index];
    topMemes.push(element) 
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 space-y-14 md:gap-2 md:grid-cols-4'>
     <Fade bottom>
      {topMemes?.map(({url,id,name})=>{
        return (

        <div key={id} className={typeof url==undefined?"hidden ":"group rounded   m-1 md:m-3 relative   md:hover:scale-105 duration-100 ease-in cursor-pointer bg-blend-darken "}>
            <CustomImage
              url={url}
              layout="responsive"
              objectFit="contain"
              width={1920}
              height={1080}
            />
            <p className='absolute  bottom-[-50px] md:group-hover:bottom-10  ml-2 md:opacity-0 p-2 rounded-xl group-hover:opacity-100 h-fit w-fit bg-gradient-to-tr from-[#D4145A] to-[#FBB03B] duration-100 ease-in transition-all'>{name}</p>
        </div>

        )
      })}
     </Fade>
    </div>
  )
}

export default Memes
