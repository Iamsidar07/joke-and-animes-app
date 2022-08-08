import Image from "next/image";
import React,{useState} from "react";

const CustomImage = ({url,width,height,layout,objectFit,objectPosition,customClassName}) => {
  const [load, setLoad] = useState(true);
  return (
    <Image
      src={
        load
          ? "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          : url
      }
      layout={layout}
      objectFit={"cover"}
      width={width}//1920
      height={height}//1780
      priority
      objectPosition={objectPosition}
      onLoad={() => setLoad(false)}
      className={load?"animate-pulse":customClassName}
    />
  );
};

export default CustomImage;
