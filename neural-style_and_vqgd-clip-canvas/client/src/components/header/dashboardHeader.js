import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from '@emotion/styled'

//Assets 
import AI from '../../assets/images/AI.png';
import AIAvatar from '../../assets/images/AIAvatar.png';

//Components
import Avatar from '../units/avatar';

//Styled Components
let StyleWrapper = styled.div`
    .active-link {
        color: #22d3ee;
    }
`

function DashboardHeader() {
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
        <div className="p-2">
            <Avatar/>
        </div>
    </div>
  );
}

export default DashboardHeader;
