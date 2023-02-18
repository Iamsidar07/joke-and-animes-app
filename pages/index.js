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

  const [loading, setLoading] = useState(false);

  return (

    <div className=" ">
      <section className="md:h-[calc(100vh-4rem)] h-[94vh] overflow-hidden max-w-7xl mx-auto ">
        <Fade bottom>
          <div className="h-full p-5 flex flex-col-reverse md:flex-row   items-center  md:justify-between justify-evenly ">
            <div className="w-full text-center md:text-left">
              <div className="space-y-4">
                <h1 className=" text-4xl  md:text-6xl  font-bold leading-10 tracking-wide font-['Montserrat', sans-serif]  ">
                  Laugh Out Loud: the <span className="text-[#0082FF]">ultimate</span> joke
              </h1>
                <h1 className=" text-sm md:text-lg md:max-w-lg leading-5 ">
                  Enter the World of Anime: A Guide to Your Favorite Characters.Our website is dedicated to bringing you the latest and greatest jokes from around the world, guaranteed to put a smile on your face. 
              </h1>

              </div>
              <Link href="/joke" target={"_blank"}>
                <button className="px-[12%]  shadow-lg py-3 md:py-4   border-none  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider  rounded-xl bg-[#0082FF] text-white font-bold animate-bounce mt-12 font-['Poppins', sans-serif]">
                  Get Started
                </button>
              </Link>
            </div>

            <Image
              src={"/intro2.gif"}
              objectFit="cover"
              alt="logo"
              width={1080}
              height={820}
            />
          </div>
        </Fade>

      </section>

      <div className="max-w-7xl mx-auto w-full">
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
            title={"Anime collections"}
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
            title={"Funny jokes"}
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
            title={"Favourite memes "}
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
