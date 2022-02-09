import React from 'react';

function footer() {
  return (
      <div className="h-132 bg-charcoal-800 w-full justify-center flex">
          <div>
            <h1 className="mt-48 text-center w-128 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Try out AI generated artwork before others
            </h1>

            <div className="mt-28 ml-74">
              <button className="text-stone-200 font-bold text-4xl pl-8 pr-8 pb-4 pt-4 rounded-lg border-2 border-cyan-600 hover:border-cyan-400">
                Get Started
              </button>
            </div>
          </div>
      </div>
  );
}

export default footer;
