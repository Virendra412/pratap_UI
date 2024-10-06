import React, { useEffect, useRef } from 'react'

const useClickAwayListner = (onClickAway) => {
    const ref = useRef(null)
    
  
    useEffect(() => {
        console.log("clickAway Rendered");
        const handleClickAway = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
              onClickAway(false)
            }
        };
        
        if (ref.current) {
            document.addEventListener('mousedown', handleClickAway);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
          };
    }, [onClickAway])
    
    return ref

}

export default useClickAwayListner