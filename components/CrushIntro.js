import React from 'react'
import CrushTalk from './CrushTalk'
import Image from 'next/image';

const CrushIntro = ({loading,pic,setLoading,isLeft}) => {
  return (
    <div id='crush-bg' className="py-5 bg-transparent relative mt-3 md:h-[80vh]  group md:flex items-center  justify-between ">
        <div className=" w-full md:h-full md:w-[60%]  group  space-y-2 py-1 md:p-5">
        
        <CrushTalk/>
        </div>
        <div className="hidden rounded-md relative max-w-[384px] w-96  h-96 md:block">
        <Image
          src={pic?.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          placeholder='blur'
          blurDataURL={pic?.url}
          onLoadingComplete={()=>setLoading(true)}
          priority
          className="rounded-md  md:group-hover:scale-105  transition-all duration-200 "
        />
        </div>
      </div>

  )
}

export default CrushIntro
