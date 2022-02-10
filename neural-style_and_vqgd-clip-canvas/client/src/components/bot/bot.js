import React, { useEffect, useState } from 'react';

//Assets 
import AIAndroid from '../../assets/images/Android.png';

//Hooks
import useClickOutside from '../../hooks/useClickOutside';

//Components
import Messenger from './chat/messenger/messenger';
import ChatBox from './chat/chat/chat';
import Actions from './chat/actions/actions';

function Bot() {
  const [chat, setChat] = useState(false);
  const [value, setValue] = useState(7);
  const [dialog, setDialog] = useState(false);

  let welcomeTxt = "Hey Marlborojamez!"
  let i = 0;
  let speed = 70;

  useEffect(() => {
      setTimeout(() => {
        setDialog(true);
        welcomeWriter();
      }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    setTimeout(() => {
      setDialog(false);
    }, 7000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dialog]);

  let domNode = useClickOutside(() => {
    setChat(false)
  });
  
  const chatWindowAnimation = (index, limit, v) => {
    if (v < 28){
        index ++;
        v += 1
        setTimeout(()=>{
          chatWindowAnimation(index, limit, v);
        }, limit)
    }
    setValue(v)
 }

 function welcomeWriter(){
  if(i < welcomeTxt.length){
      document.getElementById("welcome").innerHTML += welcomeTxt.charAt(i);
      i++;
      setTimeout(welcomeWriter , speed);
  }
}

  

  return (
      <div ref={domNode}>
        <div className={dialog ? `p-2 rounded-lg fixed bottom-32 right-32 bg-stone-200 h-12 w-auto border-cyan-700 border-2` : `hidden`}>
          <label id="welcome" className="font-medium text-lg">
          </label>
        </div>
        {
          chat ? (
            <div className={`fixed bottom-5 right-5 rounded-br-aibot rounded-tr-lg rounded-tl-lg rounded-bl-lg bg-stone-100 border-2 border-cyan-700`} style={{height: `${value}rem`, width: `${value}rem`}}>
              <div>
                <Messenger/>
                <ChatBox/>
                  {value >= 27 ? (
                    <Actions/>
                  ):null }
              </div>
            </div>
          ):null
        }
          <span onClick={() => chatWindowAnimation(0, 7, 7) + setChat(prev => !prev)}>
            <img src={AIAndroid} 
            className="cursor-pointer shadow shadow-cyan-500 hover:shadow-md hover:shadow-cyan-400 rounded-full h-28 w-28 fixed bottom-7 right-7" alt="" />
          </span>
      </div>
  );
}

export default Bot;
