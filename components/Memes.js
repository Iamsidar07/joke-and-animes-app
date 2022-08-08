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
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
     <Fade bottom>
      {topMemes?.map(({url,id,name})=>{
        return (

        <div key={id} className={typeof url==undefined?"hidden ":"group rounded   m-1 md:m-3   md:hover:scale-105 duration-100 ease-in cursor-pointer bg-blend-darken "}>
            <CustomImage
              url={url}
              layout="responsive"
              objectFit="cover"
              width={1920}
              height={1180}
            />
        </div>

        )
      })}
     </Fade>
    </div>
  )
}

export default Memes
