import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from '@emotion/styled'

//Assets 
import AI from '../../assets/images/AI.png';

//Styled Components
let StyleWrapper = styled.div`
    .active-link {
        color: #22d3ee;
    }
`

function Header() {
  return (
      <div className="justify-between w-full  flex p-1">
          <div className="p-2 flex">
                <Link to="/">
                    <img className="h-7 w-7 m-2" src={AI} alt="" />
                </Link>
                <StyleWrapper>
                    <ul className="flex ml-3">
                        <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                            <NavLink exact to="/" activeClassName="active-link">
                                Home
                            </NavLink>
                        </li>
                        
                        <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                            <NavLink exact to="/contact" activeClassName="active-link">
                                Contact
                            </NavLink>
                        </li>
                        <li className="mr-4 cursor-pointer outline-none border-none hover:text-cyan-400 p-2 text-stone-200 text-lg font-regular">
                            <NavLink exact to="/blog" activeClassName="active-link">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </StyleWrapper>
          </div>
          <div className="p-2 flex">
                <Link to="/signin">
                    <button className="outline-none border-none transition duration-300 ease-in-out hover:text-cyan-400 m-2 font-medium text-stone-200 h-8 m-2 pl-3 pr-3 text-center">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="mr-12 outline-none border-none transition duration-300 ease-in-out hover:text-white hover:bg-cyan-500 font-medium text-stone-200 h-8 m-2 pl-3 pr-3 text-center rounded bg-cyan-600">
                        Sign Up
                    </button>
                </Link>
          </div>
      </div>
  )
}

export default Header;
