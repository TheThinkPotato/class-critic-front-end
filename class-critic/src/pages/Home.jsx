import Header from "../components/Header";
import FrontCard from "../components/FrontCard";
import { useState } from "react";
import React, { useEffect } from "react";
import { search } from "../data/apiCalls";

const template = {data :[{ fName: "", lName: "", uni:"", major:"" }]};

function initLoad()
{
  return search("").then( (resp) => {
  console.log("---------->>",resp.data);
  return resp.data;});
}

function Home() {
  const [data, setData] = useState(template);

  

  useEffect(() => {
    //rerender
    // console.log("xxx**",initLoad());

  }, []);

  useEffect(() => {
    //rerender
  }, [data]);

  return (
    <div className="App bg-indigo-900 text-white h-screen flex flex-col">
      <Header data={data} setData={setData} />
      {console.log("data-", data.data)}
      {console.log("ex-", template)}
      {data.data.map((data) => (        
       <FrontCard data={data} />              
      ))}

    </div>
  );
}

export default Home;
