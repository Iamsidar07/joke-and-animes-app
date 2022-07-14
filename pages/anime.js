import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Intro from "../components/Intro";
import Animes from "../components/Animes";
import { Fade } from "react-reveal";

export async function getServerSideProps() {
  const smile_res = await fetch("https://waifu.pics/api/sfw/smile");
  const smile_data = await smile_res.json();
  return {
    props: {
      smile: smile_data,
    },
  };
}

const Anime = ({ smile }) => {
  const [keywords, setKeywords] = useState("uniform");
  const [loading, setLoading] = useState(false);
  const [animes, setAnimes] = useState([]);

  
  const getAnimes = (e) => {
    e.preventDefault();
    const getData = async function () {
      const res = await fetch(
        `https://api.waifu.im/random/?is_nsfw=null&selected_tags=${keywords}&many=true&full=false`
      );
      const data = await res.json();
      setAnimes(data);
    };
    getData();
    
  };

  useEffect(()=>{
    const getData = async function () {
      const res = await fetch(
        `https://api.waifu.im/random/?is_nsfw=null&selected_tags=${keywords}&many=true&full=false`
      );
      const data = await res.json();
      setAnimes(data);
    };
    getData();
  },[]);


  return (
    <div className=" max-w-sm md:py-10 md:max-w-6xl mx-auto">
    <Fade bottom>
      <Search
        funCall={getAnimes}
        keywords={keywords}
        setKeywords={setKeywords}
      />

      <Intro
        loading={loading}
        pic={smile}
        setLoading={setLoading}
        title={"Anime Collections"}
        paragraph={"Get Your Favourite Animes from various categories Like smile,selfie,milf,assetc."}
        isLeft={false}
        url="/anime"
        category={"Anime's"}
        isBtn={false}
      />
      </Fade>
     
      <Animes animes={animes}/>
    </div>
  );
};

export default Anime;
