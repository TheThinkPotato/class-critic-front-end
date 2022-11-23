import Header from "../components/Header";
import FrontCard from "../components/FrontCard";
import { useState } from "react";
import React, { useEffect } from "react";
import { search } from "../data/apiCalls";

const template = { data: [{ fName: "", lName: "", uni: "", major: "" }] };

function Home() {
  const [data, setData] = useState(template);

  useEffect(() => {
    //rerender
    search("").then((resp) => {
      setData(resp.data);
      return resp.data;
    });
  }, []);

  useEffect(() => {
    //rerender
  }, [data]);

  return (
    <div className="bg-indigo-900 h-screen">
      <div className="bg-indigo-900 text-white flex flex-col h-full">
        <Header data={data} setData={setData} />
        <div className="my-10"></div>
        {data.data.map((data) => (
          <FrontCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
