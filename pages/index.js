import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { Fade, Slide } from "react-reveal";
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
      <section className="h-[calc(100vh-5rem)] overflow-hidden w-full bg-[#7860C8]   flex flex-col md:flex-row md:justify-center  ">
        <Fade left>
        <div className="h-full p-5 flex flex-col  md:justify-center justify-around tracking-widest space-y-10">
          <div className="space-y-2">
            <small className="underline text-white underline-offset-8">
              WELCOME TO
            </small>
            <h1 className="text-white text-6xl md:text-8xl 2xl:text-9xl font-bold font-['Rokkitt',serif]">
              Most Loved Place Ever{" "}
            </h1>
            <p className="text-[#D7CEA5]">A favorite destination for your anime, photos,quotes and memes.</p>
          </div>
          <div className="space-x-2 flex">
          <Link href="/joke" target={"_blank"}>
            <button style={{ 
      backgroundImage: `url("btn-bg.jpg")` ,
      backgroundRepeat: "no-repeat",
    backgroundSize:" cover"
    }} className="px-2 font-['Rokkitt',serif]  shadow-lg py-3 md:py-6 2xl:py-8 border-none  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider w-full md:w-1/3">
              GRAB NOW
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/manoj-kumar-72aa54222/" target={"_blank"}>
            <button className="px-1 font-['Rokkitt',serif]  shadow-lg  py-3 md:py-4 border-none bg-[#0F3557] text-white md:hover:bg-[#015aa3d6] md:hover:-translate-y-2 transition-all duration-150 ease-in tracking-wider w-full md:w-1/3">
              Linked|IN
            </button>
          </Link>
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className=" relative hidden md:flex  md:w-[80%] 2xl:w-[50%] h-full">
          <Image
            src={"/learning-boy.png"}
            layout="fill"
            objectFit="contain"
            alt="hero-img"
          />
        </div>
        </Fade>
      </section>

      <div >
        <Fade bottom>
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
        </Fade>
        <Fade left>
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
        </Fade>


        <Fade bottom>
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
        </Fade>

       <Fade bottom>
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
