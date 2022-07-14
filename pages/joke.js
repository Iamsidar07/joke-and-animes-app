import React, { useEffect, useState } from "react";
import Joke from "../components/Joke";
import Search from "../components/Search";
import Intro from "../components/Intro";
import { Fade } from "react-reveal";

export async function getServerSideProps() {
  const happy_res = await fetch("https://waifu.pics/api/sfw/happy");
  const happy_data = await happy_res.json();

  return {
    props: {
      happy: happy_data,
    },
  };
}

const Jokes = ({ happy }) => {
  const [keywords, setKeywords] = useState("Political");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJokes = (e) => {
    e.preventDefault();
    const getData = async function () {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${keywords}`
      );
      const data = await res.json();
      setJokes(data.result);
    };
    getData();
  };

  useEffect(() => {
    const getData = async function () {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${keywords}`
      );
      const data = await res.json();
      setJokes(data.result);
    };
    getData();
  }, [keywords]);

  return (
    <div className=" max-w-sm md:py-10   md:max-w-6xl mx-auto">
      <Fade bottom>
      <Search
        funCall={getJokes}
        keywords={keywords}
        setKeywords={setKeywords}
      />

      <Intro
        loading={loading}
        pic={happy}
        setLoading={setLoading}
        title={"Funny Jokes"}
        paragraph={"Get Your Favourite Jokes from various categories Like Sex,Political,nsfw,etc."}
        isLeft={false}
        url="/joke"
        category={"Jokes"}
        isBtn={false}
      />
      </Fade>
      {jokes?.length != 0 && (
        <>
          <h1 className="md:text-3xl font-bold text-gray-400 p-3">
            Showing {keywords} Jokes results{" "}
          </h1>
          <Joke data={jokes} keywords={keywords} />
        </>
      )}
    </div>
  );
};

export default Jokes;
