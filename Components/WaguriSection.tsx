'use client'

import Image from "next/image"
import waguri from "@/Media/Kaoru.png"
import { useMotionValue, useTransform, motion } from "motion/react"

const WaguriSection = () => {

    const xMotion = useMotionValue(0)
    const yMotion = useMotionValue(0)

    const moveMouse = (e:React.MouseEvent<HTMLDivElement>)=> {

        const currentElement = e.currentTarget.getBoundingClientRect()

        const centerX = currentElement.width / 2;
        const centerY = currentElement.height / 2;

        const x = e.clientX - currentElement.left - centerX
        const y = e.clientY - currentElement.top - centerY
        
        xMotion.set(x)
        yMotion.set(y)
        console.log(x, y)

    }


    const x = useTransform(xMotion, [-700, 0, 700], [-5 , 0 , 5])
    const y = useTransform(yMotion, [-700, 0, 700], [-5 , 0 , 5])

  return (
    <div className="h-screen relative flex items-end justify-center" onMouseMove={moveMouse}>
    
    {/* title */}
    <div className="relative flex justify-center pb-35 w-full max-w-[50%]">

    <div className="bg-linear-to-t z-5 from-primary from-10% h-[60%] w-full absolute bottom-0"/>

    <motion.div 
    style={{x,y}}
    transition={{duration:3}}
    className="text-[15rem] text-shadow-[0_0_15px] text-shadow-[#1b1b1bd3] bg-linear-to-b from-[#000000f8] text-center font-bold text-transparent bg-clip-text">

    <h1>와구리</h1>
    <h1>카오루</h1>
    </motion.div>

    <div className="absolute bottom-0">

    <Image src={waguri} width={520} height={520} alt="" />
    </div>


    <motion.div 
    style={{x,y}}
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
    </div>


    </div>
  )
}

export default WaguriSection