import React, { useState } from 'react'

function DashboardActions({selected, handleSelected, options}) {

  return (
    <div>
         <div className="mt-2 flex w-full rounded-tl-lg rounded-tr-lg">
            <label onClick={() => handleSelected(0)} 
            className={selected === 0 ? `border-b-2 border-cyan-700 cursor-pointer ml-6 text-lg text-stone-200 font-extrabold`
            :`cursor-pointer ml-6 text-lg text-white font-medium`}>
                {options[0].value}
            </label>
            <label onClick={() => handleSelected(1)} 
            className={selected === 1 ? `border-b-2 border-cyan-700 cursor-pointer ml-6 text-lg text-stone-200 font-extrabold`
            :`cursor-pointer ml-6 text-lg text-white font-thin`}>
            {options[1].value}
            </label>
            <label onClick={() => handleSelected(2)} 
            className={selected === 2 ? `border-b-2 border-cyan-700 cursor-pointer ml-6 text-lg text-stone-200 font-extrabold`
            :`cursor-pointer ml-6 text-lg text-white font-thin`}>
            {options[2].value}
            </label>
        </div>
    </div>
  )
}

export default DashboardActions