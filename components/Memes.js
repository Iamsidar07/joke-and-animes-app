import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal';
import CustomImage from './CustomImage';
import { MyContextProvider } from '../context/myContext';
const Memes = ({memes}) => {

  const[load,setLoad]=useState(true);
  const [singleItem,setSingleItem]=useState(null);
  let topMemes=[];
  for (let index = 0; index < 80; index++) {
    const element = memes[index];
    topMemes.push(element) 
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:gap-1 md:grid-cols-3 '>
     <Fade bottom>
      {topMemes?.map(({url,id,name})=>{
        return (
        <div key={id} onClick={()=>setSingleItem(url)} className={typeof url==undefined?"hidden ":" group    m-1 md:m-3   md:hover:scale-105 duration-100 ease-in cursor-pointer "}>
            <CustomImage
              url={url}
              layout="responsive"
              objectFit="contain"
              width={1920}
              height={1080}
              customClassName={"rounded-xl"}
            />
            <p className='relative bottom-0 md:-bottom-10 md:absolute   md:group-hover:bottom-10  md:ml-2 md:opacity-0 p-2 rounded-xl bg-none md:group-hover:-translate-y-5 md:group-hover:opacity-100 h-fit  md:bg-white duration-100 ease-in transition-all'>{name}</p>
        </div>

        )
      })}
     </Fade>
    </div>
  )
}

export default Memes
