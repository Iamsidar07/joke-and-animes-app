import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return <div className="text-center ">
        <Image
            src={"/404.gif"}
            objectFit="contain"
            alt="404"
            width={404}
            height={404}
        />
        <p>Explore <span className="text-[#7860C8] underline"><Link href={"/joke"} >Jokes</Link></span> </p>
    </div>
}