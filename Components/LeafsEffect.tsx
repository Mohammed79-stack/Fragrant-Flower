'use client'

import { useEffect, useRef } from "react"

const LeafsEffect = () => {

    const videoControls = useRef<HTMLVideoElement>(null)


    useEffect(() => {
    if(!videoControls.current) return;
    videoControls.current.playbackRate = 1;
    },[])


  return (
    <div className="w-full brightness-150 opacity-40 hue-rotate-30 fixed h-full top-0 left-0 z-20 mix-blend-exclusion pointer-events-none">


    <video ref={videoControls} src="./leaf2.mp4" className="w-full h-full object-cover" autoPlay loop playsInline disablePictureInPicture></video>


    </div>
  )
}

export default LeafsEffect