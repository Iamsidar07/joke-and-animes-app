import Image from "next/image";
import React,{useState} from "react";

const CustomImage = ({url,width,height,layout,objectFit,objectPosition,customClassName}) => {
  const [load, setLoad] = useState(true);
  return (
    <Image
      src={
        load
          ? "/placeholder.gif"
          : url
      }
      layout={layout}
      objectFit={load?"contain":"cover"}
      width={width}//1920
      height={height}//1780
      priority
      objectPosition={load?"center center":objectPosition}
      onLoadingComplete={() => setLoad(false)}
      className={load?"animate-pulse":customClassName}
    />
  );
};

export default CustomImage;

// https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg