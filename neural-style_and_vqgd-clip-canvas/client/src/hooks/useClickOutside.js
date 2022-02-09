
import {useRef, useEffect} from 'react';

const  useClickOutside = (handler) => {
    let ref = useRef();

    useEffect(() => {
        let handle = (event) => {
            if(!ref.current.contains(event.target)){
                handler()  ;     
            }
        }
  
        document.addEventListener("mousedown", handle);
  
        return () => {
            document.removeEventListener("mousedown", handle);
        }
    }, [])
    return ref;
}

export default useClickOutside;
