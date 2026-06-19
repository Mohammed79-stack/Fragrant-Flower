import React, { useEffect, useRef, useState } from 'react'
import Labeling from './Wrappers/Labeling'
import ScenesController from './Wrappers/ScenesController'
import {scenes} from '@/Data/ScenesData'
import Scene from './Ui/Scene'
import Galaxy from './Ui/Galaxy';
import { AnimatePresence } from 'motion/react'
const RinKun = () => {

  const scenesInfo = scenes.map((el, index) => <Scene reverse={(index + 1) % 2 == 0 ? true : false} sceneData={el} key={el.phrase}/>)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)
  useEffect(()=> {
    const sRef = sectionRef.current
    const onScroll = ()=> {
      if(!sRef) return;
      if(window.scrollY >= sRef.offsetTop) {

        setShow(true)
        window.removeEventListener('scroll', onScroll)
      }
      console.log(sRef.offsetTop, window.scrollY)

    }


    window.addEventListener('scroll', onScroll)


    return () => {window.removeEventListener('scroll', onScroll)}
  },[])




  return (
    <div ref={sectionRef} className='h-[120vh] overflow-hidden relative bg-linear-to-br from-[#03060a] to-[#1f123f]'>
      <div className='absolute top-0 from-20% w-full h-[15vh] z-1 bg-linear-to-b from-[#f8faff] via-[#7b3da554] to-transparent'></div>
        <Labeling label="Rin-Kun"/>
<div className='overflow-hidden'>
<div  style={{ width: '100%', height: '100%', position: 'absolute', opacity:0.7 }}>
  <Galaxy
    starSpeed={0.4}
    density={0.4}
    mouseInteraction={false}
    hueShift={220}
    speed={0.1}
    glowIntensity={0.12}
    saturation={0.5}
    mouseRepulsion={false}
    repulsionStrength={1.5}
    twinkleIntensity={0.1}
    rotationSpeed={0.02}
    transparent
  />
</div>

        {show && <ScenesController>
        
        {scenesInfo}

        </ScenesController>}

</div>

    </div>
  )
}

export default RinKun