import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="App bg-slate-900 text-white h-screen flex flex-col">
      <Header />
    </div>
  );
}

export default Home;
