import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { Fade } from "react-reveal";
import CrushIntro from "../components/CrushIntro";
import Intro from "../components/Intro";
import { MyContextProvider } from "../context/myContext";
import Loading from "../components/Loading";

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
  const value = useContext(MyContextProvider);
  console.log(value);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <section className="h-[calc(100vh-4rem)] w-full bg-violet-100   flex flex-col md:flex-row md:justify-center  ">
        <div className="h-full p-5 flex flex-col  md:justify-center justify-around tracking-widest space-y-10">
          <div className="space-y-2">
            <small className="underline underline-offset-8 text-violet-800">
              WELCOME TO
            </small>
            <h1 className=" text-5xl md:text-6xl font-bold">
              Most Loved Place Ever{" "}
            </h1>
            <p>A favorite destination for your anime, photos,quotes and memes.</p>
          </div>
          <div className="space-x-2 flex">
          <Link href="/joke" target={"_blank"}>
            <button className="px-2 rounded-full py-2 md:py-4 border-none bg-violet-800 text-white md:hover:bg-violet-700 md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider w-full md:w-1/3">
              GRAB NOW
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/manoj-kumar-72aa54222/" target={"_blank"}>
            <button className="px-2 rounded-full py-2 md:py-4 border-none bg-[#015BA3] text-white md:hover:bg-[#015aa3d6] md:hover:-translate-y-2 transition-all duration-150 ease-in tracking-wider w-full md:w-1/3">
              Linked|IN
            </button>
          </Link>
          </div>
        </div>

        <div className=" relative hidden md:flex w-[40%] h-full">
          <Image
            src={"/hero-img.png"}
            layout="fill"
            objectFit="contain"
            alt="hero-img"
          />
        </div>
      </section>

      <div >
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
  );
}
