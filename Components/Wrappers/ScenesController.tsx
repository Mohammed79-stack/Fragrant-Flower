
import { AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'

const ScenesController = ({children}:{children:React.ReactNode}) => {
    const [index, setCurrIndex] = useState(0)
    const arr = React.Children.toArray(children)
    useEffect(()=> {
    
    if(index >= arr.length - 1) return;
    const intrvl = setInterval(() => {

        setCurrIndex((prev) => (prev + 1) % arr.length)

    }, 8000);


    return () => {
        clearInterval(intrvl)
    }

    }, [index])


    

  return (
    <div>
<AnimatePresence mode='wait'>
    {arr[index]}
</AnimatePresence>
    </div>
  )
  
}

export default ScenesController