import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal';
const Memes = ({memes}) => {

  let topMemes=[];
  for (let index = 0; index < 30; index++) {
    const element = memes[index];
    topMemes.push(element) 
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
     <Fade bottom>
      {topMemes?.map(({url,id,name})=>{
        return (

        <div key={id} className={typeof url==undefined?"hidden ":"group bg-gray-200/5 rounded relative  m-1 md:m-3  h-72 md:hover:scale-105 duration-100 ease-in cursor-pointer bg-blend-darken "}>
            <Image 
                src={url}
                layout="fill"
                objectFit='cover'
                alt={id}
                placeholder='blur'
                blurDataURL={url}
                className=" md:group-hover:scale-125 transition-all ease-in duration-200"
            />
        </div>

        )
      })}
     </Fade>
    </div>
  )
}

export default Memes
