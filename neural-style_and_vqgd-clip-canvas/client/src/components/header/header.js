import React from 'react';
import AI from '../../assets/images/AI.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
      <div className="justify-between w-full  flex p-1">
          <div className="p-2 flex">
                <Link tp="/">
                    <img className="h-7 w-7 m-2" src={AI} alt="" />
                </Link>
                <ul className="flex ml-3">
                    <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                        Home
                    </li>
                    <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                        About
                    </li>
                    <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                        Contact
                    </li>
                    <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                        What is GPT-3?
                    </li>
                    <li className="cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                        Case Studies
                    </li>
                </ul>
          </div>
          <div className="p-2 flex">
                <button className="outline-none border-none transition duration-300 ease-in-out hover:text-cyan-400 m-2 font-medium text-stone-200 h-8 m-2 pl-3 pr-3 text-center">
                    Sign In
                </button>
                <button className="mr-12 outline-none border-none transition duration-300 ease-in-out hover:text-white hover:bg-cyan-500 font-medium text-stone-200 h-8 m-2 pl-3 pr-3 text-center rounded bg-cyan-600">
                    Sign Up
                </button>
          </div>
      </div>
  )
}

export default Header;
