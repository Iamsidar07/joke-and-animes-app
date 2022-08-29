import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Intro from "../components/Intro";
import Animes from "../components/Animes";
import { Fade } from "react-reveal";
import Loading from "../components/Loading";

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
      setLoading(true);
      const res = await fetch(
        `https://api.waifu.im/random/?is_nsfw=null&selected_tags=${keywords}&many=true&full=false`
      );
      const data = await res.json();
      setAnimes(data);
      setLoading(false);
    };
    getData();
    
  };

  useEffect(()=>{
    const getData = async function () {
      setLoading(true);
      const res = await fetch(
        `https://api.waifu.im/random/?is_nsfw=null&selected_tags=${keywords}&many=true&full=false`
      );
      const data = await res.json();
      setAnimes(data);
      setLoading(false);
    };
    getData();
  },[]);


  return (
    <div className="p-3   md:py-10 ">
    <Fade bottom>
      <Search
        funCall={getAnimes}
        keywords={keywords}
        setKeywords={setKeywords}
      />

      </Fade>
      {animes?.length!=0?<Animes animes={animes}/>:
      <Loading/>}
    </div>
  );
};

export default Anime;
