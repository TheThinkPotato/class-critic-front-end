import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { search } from "../data/apiCalls";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

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
          onRequestSearch={(e) => {
            search(e).then((resp) => {
              props.setData(resp.data);
            });
          }}
        />
        {/* <button className="bg-blue-500 ml-10 py-1 px-1 rounded-full hover:bg-indigo-500 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button> */}

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="bg-blue-500 ml-10 py-1 px-1 rounded-full hover:bg-indigo-500 my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-0 w-56 origin-top-right rounded-md bg-white bg-opacity-95 shadow-lg ring-2 ring-black ring-opacity-50 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <p className="py-1 pl-2 text-xl hover:bg-slate-100">
                        Sign In
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <p className="py-1 pl-2 text-xl hover:bg-slate-100">
                        Sign Out
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <p className="py-1 pl-2 text-xl hover:bg-slate-100">
                        Register
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <hr />
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <p className="py-1 pl-2 text-xl hover:bg-slate-100">
                        My Account
                      </p>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
