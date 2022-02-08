import React from 'react';

//components
import FAQUnit from '../units/faq';
import StartCreating from '../buttons/startCreating';

function homeFAQ() {
  return (
    <div className="mt-48 w-full flex">
        <div className="flex-4">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                The Future is Here and You Just Need To Realize it. 
            </h1>
            <h3 className="mt-4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-200">
                Read through our most frequently asked questions.
            </h3>

            <div className="mt-20">
                <StartCreating/>
            </div>
        </div>
        <div className="flex-6 flex">
            <FAQUnit/>
        </div>
    </div>
  );
}

export default homeFAQ;
