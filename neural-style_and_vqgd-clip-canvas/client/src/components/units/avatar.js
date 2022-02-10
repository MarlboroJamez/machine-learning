import React, {useState} from 'react';

//Components
import DefaultDivider from '../dividers/default';

//Assets 
import AIAvatar from '../../assets/images/AIAvatar.png';

//Hooks
import useClickOutside from '../../hooks/useClickOutside';

function Avatar() {
  const [menu, setMenu] = useState(false);

  let domNode = useClickOutside(() => {
    setMenu(false)
  })

  return (
    <div className="flex" ref={domNode}>
      {/* Menu */}
      {menu ? (
        <div className="-ml-40 mt-16 absolute p-4 w-52 rounded-lg bg-charcoal-600">
          <ul>
            <li className="text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer p-2">
              View Profile
            </li>
            <li className="text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer p-2">
              Archived
            </li>
            <li className="text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer p-2">
              Account Settings
            </li>
            <div className="flex m-2">
              <li className="text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer ">
                Feedback 
              </li>
              <li className="text-stone-200">
                /
              </li>
              <li className="text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer">
                Support
              </li>
            </div>
            <li className="mb-2 text-stone-200 font-medium text-base hover:text-cyan-400 cursor-pointer p-2">
              Terms of Service
            </li>
            <DefaultDivider/>
            <li className="font-medium text-base text-stone-200 hover:text-pink-500 cursor-pointer p-2">
              Logout
            </li>
          </ul>
        </div>
      ):null}

        <img onClick={() => setMenu(prev => !prev)} src={AIAvatar} 
        className="cursor-pointer shadow shadow-cyan-500 hover:shadow-md hover:shadow-cyan-400 m-2 rounded-full h-12 w-12" alt="" />
    
        
    </div>
  );
}

export default Avatar;
