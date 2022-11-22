import Header from "../components/Header";
import FrontCard from "../components/FrontCard";
import { useState } from 'react';

function Home() {
  const [data, setData] = useState('');
    return (
    <div className="App bg-indigo-900 text-white h-screen flex flex-col">
      <Header />
      <FrontCard />
    </div>
  );
}

export default Home;
