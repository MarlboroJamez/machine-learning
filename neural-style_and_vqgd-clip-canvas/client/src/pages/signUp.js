import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

//Assets
import AIAndroid from '../assets/images/Android.png';

function SignUp() {
    const [dialog, setDialog] = useState(false);
    const [pass, setPass] = useState(false);

    let introTxt = "Hi there, my name is James and I'm here to assist you, let's get you started by signing you up.";
    let i = 0;
    let speed = 70;
    
    useEffect(() => {
        setTimeout(() => {
            setDialog(true);
            typeWriter();
        }, 2000);
    },[]);

    function typeWriter(){
        if(i < introTxt.length){
            document.getElementById("text").innerHTML += introTxt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

  return (
      <div className="pt-20 pl-20 pr-20">
          <div className="flex">
                <div className="flex flex-5">
                    <div className={dialog ? 'ml-108 fixed z-50 mt-106 w-96 p-4 rounded-lg bg-stone-100 border-2 border-cyan-500': 'hidden'}>
                        <label id="text" className="font-medium text-lg">
                        </label>
                    </div>
                    <img className="mt-24 h-120" src={AIAndroid} alt=""/>
                </div>
                <div className="flex-5 p-28">
                    <Link to="/">
                        <label className="cursor-pointer underline text-cyan-400 hover:text-cyan-500">
                            Return back to home
                        </label>
                    </Link>
                    <div>
                        <input placeholder="Email" type="text" className="mt-4 shadow-inner text-lg text-white h-12 w-96 rounded-lg border-none outline-none bg-zinc-800 p-2"/>
                        <input placeholder="Password" type="password" className="mt-4 shadow-inner text-lg text-white h-12 w-96 rounded-lg border-none outline-none bg-zinc-800 p-2"/>
                        <div className="flex">
                            <input placeholder="Confirm Password" type={pass ? "text" : "password"} className="mt-4 shadow-inner text-lg text-white h-12 w-96 rounded-lg border-none outline-none bg-zinc-800 p-2"/>
                            {pass ? (
                                <span onClick={() => setPass(prev => !prev)} className="cursor-pointer absolute ml-94">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-7 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </span>
                            ):(
                                <span onClick={() => setPass(prev => !prev)} className="cursor-pointer absolute ml-94">
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-7 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            )}
                        </div>
                        <p className="ml-2 mt-4 text-lg text-stone-200">
                            Don't have a account yet? 
                            <Link to="/signup">
                                <mark className="cursor-pointer hover:underline bg-transparent text-cyan-400 font-medium hover:text-cyan-500">
                                    Register Now
                                </mark>.
                            </Link>  
                        </p>
                    </div>
                    <button className="text-stone-200 font-bold mt-4 rounded-xl pl-4 pr-4 pt-2 pb-2 border-cyan-600 border-2 hover:border-cyan-400">
                            Sign In
                    </button>
                </div>
          </div>
      </div>
  );
}

export default SignUp;
