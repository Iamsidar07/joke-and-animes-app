import React, { useEffect, useState } from "react";
import Joke from "../components/Joke";
import Search from "../components/Search";
import Loading from "../components/Loading";

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
  const [keywords, setKeywords] = useState("dad");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJokes = (e) => {
    e.preventDefault();

    const getData = async function () {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.chucknorris.io/jokes/search?query=${keywords}`
        );
        const data = await res.json();
        setJokes(data.result);
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
        const res = await fetch(
          `https://api.chucknorris.io/jokes/search?query=${keywords}`
        );
        const data = await res.json();
        setJokes(data.result);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setLoading(false);
      }

    };
    getData();
  }, []);

  return (
    <div  className="p-3 md:py-10 ">
      <Search
        funCall={getJokes}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      {jokes?.length != 0 ? (
        <>
          <h1 className="md:text-xl text-lg font-bold text-gray-400 p-3">
            Showing {keywords} Jokes results{" "}
          </h1>
          <Joke data={jokes} keywords={keywords} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Jokes;
