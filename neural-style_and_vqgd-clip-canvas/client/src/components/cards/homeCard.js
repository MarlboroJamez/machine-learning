import React from 'react';


//components
import StartCreating from '../buttons/startCreating';
import SummaryUnit from '../units/summary';


function homeCard() {
  return (
    <div className="mt-48 w-full h-116 flex p-10 rounded bg-gradient-to-r from-deepblue-900 via-cyan-800 to-purple-900">
        <div className="flex">
          <div className="flex-5">
              <div className="w-24 mb-1 border-b-4 border-sky-900"/>
              <h2 className="text-stone-200 font-extrabold text-xl w-104">
              Creating Art with Artificial Intelligence
              </h2>
              <h1 className="mt-48 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
              The possibilities are beyond your imagination
              </h1>

              <div className="mt-20">
                  <StartCreating/>
              </div>
          </div>
          
          <div className="flex-5">
             <SummaryUnit/>
          </div>
        </div>
    </div>
  );
}

export default homeCard;
