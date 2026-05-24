import {motion} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const CustomPic = ({source, index,ref}:{source:string, index:number, ref:React.RefObject<HTMLDivElement | null>}) => {
    const [dom, setDom] = useState(false)
    const chosedSize = (i:number) => {

        switch(i){
            case 0:
                return {width:'70%', height:'250px', rotate:'-10deg', top:'250px', zIndex:3}

            case 1: 
            return {width:'50%', height:'350px',top:'240px', right:'20px', rotate:'10deg', zIndex:4}


            case 2:
                return {width:'70%', height:'350px', rotate:"4deg", left:'100px', top:'20px', zIndex:2}

            case 3:
                return {width:'200px', height:'150px'}
        }

    }

    const cords = chosedSize(index)



  return (
    <motion.div
    drag
    dragConstraints={ref}
    onDrag={(e)=> setDom(true)}
    onDragEnd={(e) => setDom(false)}
    className="absolute p-2 bg-linear-to-r from-[#d6dcf7] to-[#d5caf5] shadow-[0_0_10px] cursor-pointer hover:scale-[1.1] duration-100"
    style={{...cords, zIndex:dom ? 5 : 0}}
    >
    

    <Image className="object-cover p-2" fill src={source} alt="" />


    </motion.div>
  )
}

export default CustomPic