import React, { useState } from 'react'

//Componets   
import Header from '../header/dashboardActions';
import TXTImg from '../views/txtImg';
import StyleTransfer from '../views/styleTransfer';
import Videos from '../views/videos';

function DashboardGallery() {
    const [selected, setSelected] = useState(0);

    const options = [
        {
        value: 'Text to Image',
        index: 0
        },
        {
        value: 'Style Transfer',
        index: 1
        },
        {
        value: 'Videos',
        index: 2
        }
    ]

    const handleSelected = (e) => {
        setSelected(e)
    }

  return (
    <div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-1 mb-3 font-medium text-4xl">
        Gallery
        </h1>
        <div className="shadow shadow-stone-500 h-110 rounded-lg border-gray-400 border w-full">
           <Header selected={selected} options={options} handleSelected={handleSelected}/>
           <div className="h-109 p-4 w-full rounded-lg flex flex-wrap overflow-y-scroll">
                {selected === 0 ? <TXTImg/> : null}
                {selected === 1 ? <StyleTransfer/> : null}
                {selected === 2 ? <Videos/> : null}
           </div>
        </div>
    </div>
  )
}

export default DashboardGallery