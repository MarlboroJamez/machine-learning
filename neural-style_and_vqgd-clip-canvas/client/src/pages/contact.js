import React from 'react';

//Components
import Header from '../components/header/header';

//Assets
import AIBrain from '../assets/images/AIBrain.png';

function Contact() {
  return (
      <div>
          <Header/>
          
          <div className="p-20">
                <div className="flex">
                    <div className="flex-5">
                        <img className="-ml-20" src={AIBrain} alt="" />
                    </div>
                    <div className="flex-5">
                        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Feel free to provide feedback or report any bugs found
                        </h1>

                        <div className="pr-64 mt-14">
                            <input className="mb-6 shadow-inner text-lg text-white h-12 w-full rounded-lg border-none outline-none bg-zinc-800 p-2" type="text" placeholder="Name"/>
                            <input className="mb-6 shadow-inner text-lg text-white h-12 w-full rounded-lg border-none outline-none bg-zinc-800 p-2" type="text" placeholder="Email"/>
                            <textarea className="resize-none shadow-inner text-lg text-white h-72 w-full rounded-lg border-none outline-none bg-zinc-800 p-2" type="text" placeholder="Message"/>
                        
                            <button className="text-lg font-bold rounded-lg mt-6 float-right pl-6 pr-6 pt-2 pb-2 border-2 border-cyan-600 hover:border-cyan-400 text-stone-200">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  );
}

export default Contact;
