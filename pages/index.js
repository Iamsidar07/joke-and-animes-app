import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-reveal";
import CrushIntro from "../components/CrushIntro";
import Intro from "../components/Intro";

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
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Anime & Jokes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://iconape.com/wp-content/files/vc/201433/png/201433.png" />
      </Head>
      <div className="">
        {/* <CrushIntro loading={loading} pic={kiss} setLoading={setLoading} /> */}
        <div className="h-screen relative " style={{
        background: `url("${meme?.url}")`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize: "cover",
      }}>  
           <div className="absolute top-0 left-0 right-0 bg-black/20 h-screen"></div>
          <div className="text-4xl  md:text-8xl h-full flex flex-col items-center justify-evenly w-full pt-5 ">
             <h1 className=" box-shadow bg-white p-2 rounded-xl">Search,
             <Link href={"/joke"}>
             <a className="text-blue-500 cursor-pointer px-1 z-[11] ">Read </a>
             </Link>
              and Laugh</h1>

          </div>
        </div>
       
        <Fade bottom >
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
        </Fade>
      </div>
    </div>
  );
}
