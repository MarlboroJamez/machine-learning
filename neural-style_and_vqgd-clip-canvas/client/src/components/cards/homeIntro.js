import React from 'react';

function homeIntro({AIFace}) {
  return (
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
  );
}

export default homeIntro;
