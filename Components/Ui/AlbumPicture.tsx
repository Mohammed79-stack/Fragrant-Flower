'use client'
import { useRef } from "react"
import CustomPic from "./CustomPic"


const AlbumPicture = ({img}:{img:string[]}) => {

    const containerRef = useRef<HTMLDivElement | null>(null)


  return (
    <div
    ref={containerRef}
    className="w-full h-full relative"
>

{

    img.map((el,index) => (<CustomPic source={el} index={index} key={index} ref={containerRef}/>))

}



    </div>
  )
}

export default AlbumPicture