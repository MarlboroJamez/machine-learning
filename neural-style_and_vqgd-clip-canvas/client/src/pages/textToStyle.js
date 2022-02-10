import React from 'react'
import {Link} from 'react-router-dom';

//Components
import Header from '../components/header/dashboardHeader';

function TextToStyle() {
  return (
    <div>
      <Header/>
      <Link to='/dashboard'>
        <label 
        className="cursor-pointer text-lg text-cyan-500 font-bold hover:text-cyan-400 hover:underline ml-6">
            Go back
        </label>
      </Link>
    </div>
  )
}

export default TextToStyle