import React from 'react'
import {Link} from 'react-router-dom';

function DashboardActions() {
  return (
    <div className="flex">
        <Link to="/dashboard/style/text">
            <div 
            className="text-zinc-600 hover:text-cyan-600 hover:shadow-md hover:shadow-cyan-400 cursor-pointer p-8 m-4 h-24 w-96 rounded-lg bg-gradient-to-r from-stone-300 via-stone-200 to-stone-100">
                <h1 className="text-center text-2xl font-bold">
                    Text to Image / Video
                </h1>
                <label 
                className="-mt-14 -mr-6 float-right shadow-md bg-gradient-to-r from-purple-800 via-purple-500 to-pink-400 text-xs text-white font-extrabold pl-2 pr-2 rounded-lg">
                    Popular
                </label>
            </div>
        </Link>
        <Link to="/dashboard/style/transfer">
            <div c
            className="text-zinc-600 hover:text-pink-600 hover:shadow-md hover:shadow-pink-500 cursor-pointer p-8 m-4 m-4 h-24 w-96 rounded-lg bg-gradient-to-r from-stone-300 via-stone-200 to-stone-100">
                <h1 className="text-center text-2xl font-bold">
                    Style Transfer
                </h1>
            </div>
        </Link>
    </div>
  )
}

export default DashboardActions