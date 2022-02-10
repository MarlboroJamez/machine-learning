import React, { useState } from 'react'

//Components
import Checkbox from "@material-tailwind/react/Checkbox"

function Actions() {
    const [check, setCheck] = useState(true);

  return (
    <div className="m-8">
        <div className="mb-2">
            <Checkbox
                color="lightBlue"
                text="Assistance"
                id="Assistance"
                checked={check ? true : false}
                onClick={() => setCheck(prev => !prev)}
            />
        </div>
        
        <div className="mt-2">
            <Checkbox
                className="checkbox"
                color="lightBlue"
                text="Universal"
                id="Universal"
                onClick={() => check ? setCheck(false) : true}
                checked={check ? false : true}
            />
        </div>
    </div>
  )
}

export default Actions