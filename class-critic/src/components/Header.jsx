import React from "react";
import { Link } from "react-router-dom";
import SearchBar  from "material-ui-search-bar";
import { search } from "../data/apiCalls";

const Header = (props) => {
   

  return (
    <header className="bg-white text-slate-900">
      <div className="justify-center flex py-2">
        <Link to="/">
          <button>
            <img src="/logo.png" alt="Logo" className="w-24 mx-2" />
          </button>
        </Link>
        <div className="flex flex-col self-center mx-2">
          <h1 className="text-4xl font-bold">Class Critic</h1>

          <p className="text-2xl font-semibold italic">Create better groups</p>
        </div>
        <SearchBar
          className="my-auto w-96 ml-5 border-2 border-black"
        //   onChange={(newValue) => console.log({ value: newValue })}
          onRequestSearch={(e) => {            
            search(e).then((resp => {
              // console.log(">><<>!!!!!!!",resp.data);              
                    // setData(resp.data);       
                    props.setData(resp.data);
                    // props=resp.data;             
                    // console.log("data-",data);        
              // return resp
            }));
          }}
        />
      </div>
    </header>
  );
};

export default Header;
