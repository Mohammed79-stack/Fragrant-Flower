import {motion} from 'framer-motion'

type Photo = {
  photo: string
  phrase: string
}

type SceneProps = {
  sceneData: Photo
  reverse:boolean
}

const Scene = ({sceneData, reverse }:SceneProps) => {
  return (
<motion.div

className='w-full h-full overflow-hidden'>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
transition={{duration:1.2}}
className={`absolute w-full items-center gap-80 flex ${reverse ? 'flex-row-reverse' : ''} drop-shadow-[0_0_20px] drop-shadow-[#7646968a] bottom-0 left-1/2 -translate-x-1/2 `}>
<div className='w-[800px] h-[800px]'>
<div
  className="w-full h-full shrink-0 bg-linear-to-r from-[#1a2a3a] to-[#533d86]"
  style={{

    WebkitMaskImage: `url(${sceneData.photo})`,
    maskImage: `url(${sceneData.photo})`,

    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",

    WebkitMaskSize: "cover",
    maskSize: "cover",

    WebkitMaskPosition: "center",
    maskPosition: "center",
  }}
/>
</div>

<motion.div 
initial={{opacity:0, y:-10}}
whileInView={{opacity:1,y:0}}
transition={{delay:1, duration:1.2}}
className='bg-linear-to-r text-shadow-[0_0_20px] text-shadow-[#a556c4] from-[#824da1] to-[#533d86] bg-clip-text text-transparent max-w-110 text-center flex justify-center'>

<h1 className='text-[3vw]'>{sceneData.phrase}</h1>


</motion.div>
</motion.div>







</motion.div>

  )
}

export default Scene