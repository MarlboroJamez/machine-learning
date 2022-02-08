import React from 'react';

//Components
import GetStarted from '../buttons/getStarted';

function registerToday() {
  return (
    <div className="flex justify-between mt-48 w-full h-40 p-8 rounded bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900">
            <div>
                <label className="text-sm font-bold text-stone-400">
                    Let's Get You Started Today
                </label>
                <h2 className="mt-2 font-extrabold text-3xl text-stone-200">
                    Register Today & Start Exploring the Endless Posibilities.
                </h2>
            </div>
            <div className="mt-5">
                <GetStarted/>
            </div>
      </div>
  );
}

export default registerToday;
