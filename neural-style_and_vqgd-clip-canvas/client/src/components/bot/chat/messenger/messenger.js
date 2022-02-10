import React from 'react'

function Messenger() {
  return (
    <div>
        <div className="flex">
            <input placeHolder="Ask James a question..." type="text" className="shadow-inner text-lg text-white h-12 w-full rounded-tl  border-none outline-none bg-zinc-800 p-2"/>
            <button className="pl-3 pr-3 bg-gradient-to-r from-purple-700 to-pink-800 hover:from-purple-700 hover:to-pink-600 text-lg font-bold text-white">
                Send
            </button>
        </div>
    </div>
  )
}

export default Messenger