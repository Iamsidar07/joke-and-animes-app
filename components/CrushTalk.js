import React, { useState } from "react";

const CrushTalk = () => {

  const [crush, setCrush] = useState({
    msg: "Your message",
  });

  const [loveRes, setLoveRes] = useState("");
  const options = {
    method: "GET",
    headers: {
      Authorization: "KUUzfUjnZZfd",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY1,
      "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
    },
  };


  const talkToLove = (e) => {
    e.preventDefault();
    fetch(
      `https://random-stuff-api.p.rapidapi.com/ai?msg=${crush.msg}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setLoveRes(response.AIResponse))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="px-2 h-60 py-1 md:p-3 md:h-72 text-white block  items-center justify-start   mx-auto  rounded-lg shadow-2xl shadow-[#1e293b9c] bg-[#1e293b9c]  w-full">
      <h1 className="  text-transparent   bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 text-3xl md:text-6xl font-bold  transition-colors duration-100 ease-in">Crush Talk❤️</h1>
        <form onSubmit={talkToLove} className="p-3 h-44 w-full">
          <div className="form-group ">
            <label 
              className="form-label inline-block mb-2 text-gray-400"
            >
               Message
            </label>
            <input
              type="text"
              className="form-control font-medium block w-full px-3 py-1.5 text-base  bg-clip-padding  rounded transition  ease-in-out  m-0 focus:text-white bg-gray-500/10  focus:outline-none"
              placeholder="Start typing..."
              value={crush.msg}
              onChange={(e)=>setCrush(e.target.value)}
            />
            <small className="text-gray-400">Press Enter to send message ..</small>
          </div>
         <p className="py-3"> <small className="text-gray-300 ">{loveRes&&"Reply-" }</small>{loveRes}</p>

        </form>
      </div>

    </div>
  );
};

export default CrushTalk;
