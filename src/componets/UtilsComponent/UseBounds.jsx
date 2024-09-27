import React, { useEffect, useRef, useState } from 'react'

const useBounds = () => {

    const ref = useRef(null)
    const [bounds, setBounds] = useState()
    
    useEffect(()=>{
        if (ref.current) {
            const d = ref.current.getBoundingClientRect()
            setBounds(d)
      }
    },[ref])

    return [ref,bounds]
 
}

export default useBounds