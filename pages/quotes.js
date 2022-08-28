import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";
import Search from "../components/Search";
import Intro from "../components/Intro";
import { Fade } from "react-reveal";
import Loading from "../components/Loading";

export async function getServerSideProps() {
  const kill_res = await fetch("https://waifu.pics/api/sfw/kill");
  const kill_data = await kill_res.json();

  const quote_res = await fetch("https://animechan.vercel.app/api/quotes");
  const quote_data = await quote_res.json();

  return {
    props: {
      kill: kill_data,
      quotes: quote_data,
    },
  };
}

const Quotes = ({ kill, quotes }) => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [quotesData, setQuotesData] = useState([]);

  const getQuotes = (e) => {
    e.preventDefault();
    const getData = async function () {
      setLoading(true);
      
      const res = await fetch("https://animechan.vercel.app/api/quotes");
      const data = await res.json();
      setQuotesData(data);
      setLoading(false);
    };
    getData();
  };

  useEffect(() => {
    const getData = async function () {
      setLoading(true);
      
      const res = await fetch("https://animechan.vercel.app/api/quotes");
      const data = await res.json();
      setQuotesData(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="p-3  md:py-10 ">
      <Fade bottom>
      <Search
        funCall={getQuotes}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      </Fade>
      {quotesData.length != 0 ? <Quote quotes={quotesData} />:<Loading/>}
      <Quote quotes={quotes} />
    </div>
  );
};

export default Quotes;
