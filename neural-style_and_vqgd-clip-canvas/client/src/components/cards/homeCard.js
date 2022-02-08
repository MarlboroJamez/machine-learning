import React from 'react';


//components
import StartCreating from '../buttons/startCreating';

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
              <p className="text-stone-200 text-lg">
              Our <mark className="bg-transparent font-bold text-white">FIRST</mark> option would be to make use of <mark className="bg-transparent font-bold text-white">"Neural Style Transfers"</mark>, where our AI 
              re-creates artwork from images into any style or filters from the comfort of your imagination.
              </p>

              <p className="text-stone-200 mt-10 text-lg">
              Our <mark className="bg-transparent font-bold text-white">SECOND</mark> option would be to make use of <mark className="bg-transparent font-bold text-white">"VQGAN + CLIP"</mark>, where you can create wildly imagined images
              from a single prompted text with the comfort of our AI.
              </p>

              <p className="text-stone-200 mt-10 text-lg">
              Your <mark className="bg-transparent font-bold text-white">CREATIONS</mark> belong to you, and you can do whatever you like with them (provided you are - or have permission from - the copyright owner of the original images).
              </p>

              <p className="text-stone-200 mt-10 text-lg">
              We have simple <mark className="bg-transparent font-bold text-white">EDITING TOOLS</mark> not offered by other AI art generators or style-transfer apps - to help you turn your photos into masterpieces.
              </p>

              <p className="text-stone-200 mt-10 text-lg">
                This <mark className="bg-transparent font-bold text-white">AI GENERATOR</mark> application is available and free to use online, allowing you to share and create your amazing art work.
              </p>

              <p className="text-stone-200 mt-10 text-lg">
                The <mark className="bg-transparent font-bold text-white">NFT</mark> industry is dependable on show casing digital art, where our application implies as an extra tool set to your creations.
              </p>

              <label className="underline font-bold text-white float-right mt-16 text-xl hover:text-cyan-400 mr-10 cursor-pointer">
              Learn More
              </label>
          </div>
        </div>
    </div>
  );
}

export default homeCard;
