import React from 'react';
import Header from '../components/header/header';
import AIFace from '../assets/images/AIFace.png';

function Home() {
  return (
  <div>
    <Header/>
      
      <div className="p-20">
        <div className="flex">
            <div className="flex-5">
                <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Generate Art with Artificial Intelligence
                </h1>
                <h3 className="mt-4 font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-200">
                  Turn your imagination into art, powered by the latest technologies.
                </h3>
                <p className="text-stone-200 mt-7 text-lg">
                  Create eye catching art work with the use of <mark className="bg-transparent font-bold text-white">Artificial Intelligence</mark>. Start with a individual photo and recreate it in any style with the use of <mark className="bg-transparent font-bold text-white">Neural Style models</mark>,
                  or generate art from nothing but with the use of text prompt through implementations of <mark className="bg-transparent font-bold text-white">VQGAN + CLIP</mark> models.
                </p>
                <p className="text-stone-200 mt-14 text-lg">
                  Stay updated on our latest future implementations, by joining the <mark className="bg-transparent font-bold text-white">"Neural Network"</mark>.
                </p>

                <div className="flex mt-4 float-left">
                  <input className="shadow-inner text-lg text-white h-12 w-100 rounded-tl rounded-bl border-none outline-none bg-zinc-800 p-2" type="text" placeholder="Email address"/>
                  <button className="hover:bg-cyan-600 font-bold text-lg text-stone-200 hover:text-white h-12 rounded-tr rounded-br bg-cyan-700 pl-4 pr-4">
                    Subscribe
                  </button>
                </div>
            </div>
            <div className="flex-5">
                <img className="-mt-20 -ml-4" src={AIFace} alt="" />
            </div>
        </div>

        <div className="mt-32 w-full h-100 bg-red-100 flex p-10 rounded bg-gradient-to-r from-deepblue-900 via-cyan-800 to-purple-900">
            <div className="flex">
              <div className="flex-5">
                <h2 className="text-stone-200 font-extrabold text-xl w-104">
                  Creating Art with Artificial Intelligence
                </h2>
                <h1 className="mt-20 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
                  The possibilities are beyond your imagination
                </h1>

                <button className="hover:bg-cyan-600 hover:shadow-md hover:shadow-cyan-900 font-bold text-stone-200 mt-16 pr-4 pl-4 h-10 rounded outline-none border-none bg-cyan-700 text-xl">
                  Start Creating Today
                </button>
              </div>
              <div className="flex-5">
                <p className="text-stone-200 text-lg">
                  Our <mark className="bg-transparent font-bold text-white">FIRST</mark> option would be to make use of <mark className="bg-transparent font-bold text-white">"Neural Style Transfers"</mark>, where our AI 
                  re-creates artwork from images into any style or filters from the comfort of your imagination.
                </p>

                <p className="mt-4 text-stone-200 mt-10 text-lg">
                  Our <mark className="bg-transparent font-bold text-white">SECOND</mark> option would be to make use of <mark className="bg-transparent font-bold text-white">"VQGAN + CLIP"</mark>, where you can create wildly imagined images
                  from a single prompted text with the comfort of our AI.
                </p>

                <p className="mt-4 text-stone-200 mt-10 text-lg">
                  Your <mark className="bg-transparent font-bold text-white">CREATIONS</mark> belong to you, and you can do whatever you like with them (provided you are - or have permission from - the copyright owner of the original images).
                </p>

                <label className="underline font-bold text-white float-right mt-8 text-xl hover:text-cyan-400 mr-10 cursor-pointer">
                  Learn More
                </label>
              </div>
            </div>
        </div>
      </div>
  </div>)
}

export default Home;
