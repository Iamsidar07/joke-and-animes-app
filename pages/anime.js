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

const categories = [
  "uniform",
 " maid",
"  waifu",
  "marin-kitagawa",
 " mori-calliope",
 " raiden-shogun",
"  oppai",
  "selfies",
"  ass",
"hentai",
"milf",
"oral",
"paizuri",
"ecchi",
"ero",
];
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

  useEffect(() => {
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
  }, []);
  console.log({ animes });

  return (
    <div className="p-3  md:py-10 min-h-screen">
      <Fade bottom>
        <Search
          funCall={getAnimes}
          keywords={keywords}
          setKeywords={setKeywords}
        />
      </Fade>
      {animes?.detail && (
        <div className="max-w-sm mx-auto">
          {" "}
          <h2 className="text-center text-orange-400 text-2xl">
            Oops! 🤭 {animes?.detail}. You can search 
            <div className="flex max-w-sm  text-green-500 flex-wrap ">
            {categories.map((category, i) => {
              return (
                <div key={i}>
                    {category},
                </div>
              );
            })}
            </div>
          </h2>
        </div>
      )}

      {animes?.length != 0 ? <Animes animes={animes} /> : <Loading />}
    </div>
  );
};

export default Anime;
