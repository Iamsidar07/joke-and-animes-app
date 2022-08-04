import React, { useState } from "react";

const CrushTalk = () => {

  const [crush, setCrush] = useState({
    msg: "Start typing.. ",
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
      <div className="px-2 max-w-lg h-60 py-1 md:p-3 md:h-96  flex flex-col  items-center justify-between  rounded-md bg-white shadow-2xl w-[95vw] md:min-w-[60vw] m-auto">
      <div className="text-center space-y-3">
      <h1 className="  text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 text-2xl md:text-6xl   transition-colors duration-100 ease-in ">crush talking</h1> 
      <p className="text-6xl max-w-fit mx-auto bg-white  rounded-lg p-1 box-shadow">🧑‍🤝‍🧑</p>
      </div>
        <form onSubmit={talkToLove} className="p-3 h-44 w-full">
          <div className="form-group ">
            <label 
              className="form-label inline-block mb-2 text-teal-500"
            >
               Message
            </label>
            <input
              type="text"
              className="form-control font-medium block w-full px-3 py-1.5 text-base  bg-clip-padding  rounded transition  ease-in-out  m-0 focus:text-teal-500 bg-slate-100 focus:outline-none"
              placeholder="Start typing..."
              value={crush.msg}
              onChange={(e)=>setCrush(e.target.value)}
            />
            <small className=" italic">Press Enter to send message ..</small>
          </div>
         <p className="py-3 "> <small className="text-teal-500">{loveRes&&"Reply-" }</small>{loveRes}</p>

        </form>
      </div>

    </div>
  );
};

export default CrushTalk;
