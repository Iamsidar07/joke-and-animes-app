import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { Fade } from "react-reveal";
import CrushIntro from "../components/CrushIntro";
import Intro from "../components/Intro";
import { MyContextProvider } from "../context/myContext";

export async function getServerSideProps() {
  // const anime_res = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
  // const anime_data = await anime_res.json();

  const kiss_res = await fetch("https://waifu.pics/api/sfw/kiss");
  const kiss_data = await kiss_res.json();

  const happy_res = await fetch("https://waifu.pics/api/sfw/happy");
  const happy_data = await happy_res.json();

  const meme_res = await fetch("https://api.catboys.com/img");
  const meme_data = await meme_res.json();

  const smile_res = await fetch("https://waifu.pics/api/sfw/smile");
  const smile_data = await smile_res.json();

  const kill_res = await fetch("https://waifu.pics/api/sfw/kill");
  const kill_data = await kill_res.json();
  return {
    props: {
      // animes: anime_data.data,
      kiss: kiss_data,
      happy: happy_data,
      kill: kill_data,
      meme: meme_data,
      smile: smile_data,
    },
  };
}

export default function Home({ kiss, happy, kill, meme, smile }) {
  const value=useContext(MyContextProvider);
  console.log(value);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Anime & Jokes</title>
        <meta name="description" content="Generated by create next app" />
       </Head>
      <div className="">
        {/* <CrushIntro loading={loading} pic={kiss} setLoading={setLoading} /> */}
        <div className="overflow-hidden  md:h-screen relative  flex items-center justify-center">  
           <video src="video.mp4" autoPlay muted loop  className="w-[100vw] top-0 "></video>
          <div className="text-4xl text-white absolute   md:text-8xl h-full flex flex-col items-center justify-center w-full pt-5 ">
             <h1 className="   p-2 rounded-xl">Search,
             <Link href={"/joke"}>
             <a className="text-blue-500 cursor-pointer px-1 z-[11] ">Read </a>
             </Link>
              and Laugh</h1>
          </div>
        </div>
       
        <div className="flex items-center justify-center   flex-wrap min-h-screen py-4">
        <Intro
            loading={loading}
            pic={kill}
            setLoading={setLoading}
            title={"Animes quotes"}
            paragraph={
              "get quotes of your favourite Animes Character's Quote Like Ergo Proxy,Haruhi Suzumiya,Basara Tōjō etc."
            }
            isLeft={true}
            url="/quotes"
            category={"Quotes"}
            isBtn={true}
            bg={"#FFDEDE"}
          />
          <Intro
            loading={loading}
            pic={smile}
            setLoading={setLoading}
            title={"Anime Collections"}
            paragraph={
              "Get Your Favourite Animes from various categories Like smile,selfie,milf,assetc."
            }
            isLeft={false}
            url="/anime"
            category={"Anime's"}
            isBtn={true}
            bg="#59CE8F"
          />
          <Intro
            loading={loading}
            pic={happy}
            setLoading={setLoading}
            title={"Funny Jokes"}
            paragraph={
              "Get Your Favourite Jokes from various categories Like Sex,Political,nsfw,etc."
            }
            isLeft={true}
            url="/joke"
            category={"Jokes"}
            isBtn={true}
            bg="#ABC9FF"
          />
          <Intro
            loading={loading}
            pic={meme}
            setLoading={setLoading}
            title={"Favourite Memes "}
            paragraph={
              "Get Your Favourite Memes from here from various categories Like Chuck Noris,Sexist,Christmas,etc."
            }
            isLeft={false}
            url="/meme"
            category={"Memes"}
            isBtn={true}
            bg="#EAF6F6"
          />
        </div>
      </div>
    </div>
  );
}
