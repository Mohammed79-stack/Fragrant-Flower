'use client'

import Image from "next/image"
import waguri from "@/Media/Kaoru.png"
import { useMotionValue, useTransform, motion } from "motion/react"
import Char from "./Ui/Char"
import ScrollArrow from "./Ui/ScrollArrow"
import { useEffect, useState } from "react"

const WaguriSection = () => {

    const xMotion = useMotionValue(0)
    const yMotion = useMotionValue(0)
    const [show, setShow] = useState(true);
    const moveMouse = (e:React.MouseEvent<HTMLDivElement>)=> {

        const currentElement = e.currentTarget.getBoundingClientRect()

        const centerX = currentElement.width / 2;
        const centerY = currentElement.height / 2;

        const x = e.clientX - currentElement.left - centerX
        const y = e.clientY - currentElement.top - centerY
        
        xMotion.set(x)
        yMotion.set(y)
  

    }


    const x = useTransform(xMotion, [-700, 0, 700], [-5 , 0 , 5])
    const y = useTransform(yMotion, [-500, 0, 500], [-10 , 0 , 10])

    const rotateX = useTransform(yMotion, [-700, 0, 700], [8 , 0 , -8])
    const rotateY = useTransform(xMotion, [-700, 0, 700], [10 , 0 , -10])


    const mouseLeave = () => {

      yMotion.set(0)
      xMotion.set(0)


    }


useEffect(() => {
  const sub = (e: Event) => {

    if(window.scrollY > 0) {
      setShow(false)
      window.removeEventListener('scroll', sub)
    }



  }

  window.addEventListener('scroll', sub)

  return () => {
    window.removeEventListener('scroll', sub)
  }
}, [])


  return (
    <div className="h-screen relative flex items-end justify-center" onMouseMove={moveMouse} onMouseLeave={mouseLeave}>
    <ScrollArrow scrollVisible={show}/>
    {/* title */}
    <motion.div
    style={{perspective:'1200px', rotateX, rotateY}}
    className="relative duration-300 flex justify-center pb-35 w-full max-w-[50%]">

    <div className="bg-linear-to-t z-5 from-primary from-10% h-[60%] w-full absolute bottom-0"/>

    <motion.div 
    style={{rotateX, rotateY,x,y}}
    transition={{duration:3}}
    className="text-[15rem] text-shadow-[0_0_15px] text-shadow-[#1b1b1bd3] bg-linear-to-b from-[#000000f8] text-center font-bold text-transparent bg-clip-text">

    <h1>와구리</h1>
    <h1>카오루</h1>
    </motion.div>

    <div className="absolute bottom-0 hue-rotate-330 drop-shadow-[0_-12px_5px] drop-shadow-[#0000009f]">
    <Char img="https://i.pinimg.com/originals/6a/82/d5/6a82d542e1f3ceac513fbdee3f5c76ba.gif" x={-100} y={120} flip={false}/>
    <Char img="https://i.pinimg.com/originals/b7/e6/1e/b7e61e2ad1ef3dcacab53cd02f8f1379.gif" x={300} y={380} flip={true}/>
    <Image src={waguri} width={520} height={520} alt="" />
    </div>


    <motion.div 
    style={{x,y,rotateX,rotateY}}
    className="absolute bottom-0 py-4 z-6 flex flex-col items-center">

    <div className="font-bold flex flex-col items-center">
    <h1 className="text-7xl">WAGURI</h1>
    <h2 className="text-6xl -translate-y-4 relative">Kaourko <span className="absolute left-0 scale-[1.05] text-[#bdc6ce] -z-1">Kaourko</span></h2>
    </div>


    <div className="text-center font-serif">

    <p>
    Kaoruko is described as a pretty and petite young girl with wavy, hip length dark hair secured with a black colored headband and dark colored eyes. Though often seen in her school uniform, given that she's a student at Kikyo Private Academy, she's also seen wearing cute and feminine outfits any time she's hanging out with friends or going on dates.

    </p>

    </div>


    </motion.div>
    </motion.div>


    </div>
  )
}

export default WaguriSection