import React, { useEffect, useState } from "react";
import Memes from "../components/Memes";
import Search from "../components/Search";
import Intro from "../components/Intro";
import { Fade } from "react-reveal";
import Loading from "../components/Loading";

export async function getServerSideProps() {
  const meme_res = await fetch("https://api.catboys.com/img");
  const meme_data = await meme_res.json();

  return {
    props: {
      meme: meme_data,
    },
  };
}

const Meme = ({ meme }) => {
  const [keywords, setKeywords] = useState("Political");
  const [loading, setLoading] = useState(false);
  const [memes, setMemes] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY2;
  const getMemes = (e) => {
    e.preventDefault();
    const getData = async function () {
      setLoading(true);
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setMemes(data.data.memes);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setLoading(false);
      }

    };
    getData();
  };

  useEffect(() => {
    const getData = async function () {
      setLoading(true);
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setMemes(data.data.memes);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setLoading(false);
      }

    };
    getData();
  }, []);


  return (
    <div className="p-3  md:py-10   mx-auto">
      <Fade bottom>
        <Search
          funCall={getMemes}
          keywords={keywords}
          setKeywords={setKeywords}
        />

      </Fade>

      {memes?.length != 0 ? (
        <>
          <h1 className="md:text-3xl text-2xl font-bold text-gray-400 p-3">
            Showing {keywords} Memes results{" "}
          </h1>
          <Memes memes={memes} />
        </>
      ):
      <Loading/>}
    </div>
  );
};

export default Meme;
