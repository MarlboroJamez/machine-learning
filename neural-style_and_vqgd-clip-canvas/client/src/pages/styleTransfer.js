import React from 'react'
import {Link} from 'react-router-dom';

//Components
import Header from '../components/header/dashboardHeader';

function StyleTransfer() {
  return (
    <div>
        <Header/>

        <Link to='/dashboard'>
        <label 
        className="cursor-pointer text-lg text-pink-500 font-bold hover:text-pink-400 hover:underline ml-6">
            Go back
        </label>
      </Link>
    </div>
  )
}

export default StyleTransfer