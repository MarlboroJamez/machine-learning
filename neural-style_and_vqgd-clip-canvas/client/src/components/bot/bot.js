import React from 'react';

//Assets 
import AIAndroid from '../../assets/images/Android.png';

function Bot() {
  return (
      <div>
          <img src={AIAndroid} className="cursor-pointer shadow shadow-cyan-500 hover:shadow-md hover:shadow-cyan-400 rounded-full h-28 w-28 fixed bottom-5 right-5" alt="" />
      </div>
  );
}

export default Bot;
