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
      <div className="px-3 py-1 md:p-3 md:h-72 text-white block  items-center justify-start   mx-auto  rounded-lg shadow-xl  bg-[#1e293b]  w-full">
      <h1 className="  text-transparent   bg-clip-text bg-gradient-to-r from-purple-700 to-black text-3xl md:text-6xl font-bold  transition-colors duration-100 ease-in">Crush Talk❤️</h1>
        <form onSubmit={talkToLove} className="p-3">
          <div className="form-group ">
            <label 
              className="form-label inline-block mb-2 text-gray-400"
            >
               Message
            </label>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-transparent bg-clip-padding  rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
              placeholder="Start typing..."
              value={crush.msg}
              onChange={(e)=>setCrush(e.target.value)}
            />
            <small>Press Enter to send message ..</small>
          </div>
         <p> <small className="text-gray-400">{loveRes&&"Reply-" }</small>{loveRes}</p>

        </form>
      </div>

    </div>
  );
};

export default CrushTalk;
