import {easeInOut, motion, useInView} from 'framer-motion'


const Labeling = ({label}:{label:string}) => {


  return (
    <div className='absolute w-full h-full top-0'>
    <motion.div 
    initial={{x:'100%', filter:'blur(4px)'}}
    whileInView={{x: 0,filter:'blur(0px)'}}
    exit={{x:'100%'}}
    transition={{duration:0.6, ease:easeInOut}}
    className='sticky text-center left-full shadow-[0_0_10px] shadow-[#00000083] top-40 p-4 my-4 w-40 bg-black'>
    
    <h2 className="text-white text-xl font-bold ">{label}</h2>

    </motion.div>
    </div>
  )
}

export default Labeling