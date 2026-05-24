import Image from "next/image"
import { useContext } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { CurrContext } from "../Wrappers/Slider"
import {motion} from 'framer-motion'
import { memoriesAlbum } from "@/Data/AlbumPages"
import AlbumPicture from "./AlbumPicture"
const AlbumPage = ({type, index, data}:{type:string,data:any, index:number}) => {
    

    const renderAlbum = () => {

        switch(type) {
            case 'main-cover':
                return <CoverPage data={{...data}}/>
            case 'section-cover':
                return <CoverSectionPage data={{...data}}/>
            case 'album':
                return <AlPage data={{...data}}/>
        }

    }
    

    const context = useContext(CurrContext)

  return (
    <div className="flex flex-center w-full h-full overflow-hidden">
    <motion.div 
    variants={context?.variants}
    initial='initial'
    animate='visible'
    exit="invisible"
    transition={{duration:0.5}}
    className={`${type == 'main-cover' ? 'p-0' : 'p-4'} w-full mx-auto max-w-[75%] h-160 bg-linear-to-r from-[#1a2a3a] to-[#533d86] shadow-fragnent-box relative`}>


    {renderAlbum()}

    <div className="absolute text-white gap-4 left-10 bottom-8 flex items-center">

        <button onClick={() => context.setCurr((prev) => prev != 0 ? prev - 1 : prev)}><BsArrowLeft /></button>
        <span>{context.curr + 1} / {memoriesAlbum.length}</span>
        <button onClick={() => context.setCurr((prev) => (prev + 1) % memoriesAlbum.length)}><BsArrowRight /></button>
    </div>
    </motion.div>
    </div>
  )
}




const CoverPage = ({data}:{data:any}) => {
    const day = new Date().getDay();
    const year = new Date().getFullYear();
    const context = useContext(CurrContext)
    return <div className="w-full h-full text-white relative flex">

            <div className="w-[70%] relative flex flex-center">

            <div className="absolute text-lg top-0 py-2 px-10 flex items-center w-full justify-between">
            <span>"6:36</span>
            <span>{data.collection}</span>
            <span>{day},{year}</span>
            </div>

            <div className="absolute w-25 h-42 top-12 left-8 mix-blend-luminosity">

            <Image src={data.smallImg} unoptimized objectFit="cover" alt={data.title} fill/>

            </div>
            

            <div className="text-center flower-textshadow text-shadow-[#fffefeb4]">

            <h1 className="text-4xl md:text-6xl mb-4">{data.title}</h1>
            <h2 className="text-md md:text-2xl">{data.subtitle}</h2>

            </div>


            </div>

            <div className="w-[30%]">
            <div className="absolute w-[30%] h-full mix-blend-luminosity">

            <Image src={data.coverImg} unoptimized objectFit="cover" alt={data.title} fill/>

            </div>


            </div>



    </div>

}



const CoverSectionPage = ({data}:{data:any}) => {

    return <div className="text-white text-4xl flex flex-center h-full relative">
    <div
    style={{

        maskImage:'radial-gradient(circle, white 0%, transparent 60%)'

    }}
    className="w-full h-full absolute top-0 left-0 -z-1 opacity-15">
    <Image src={data.cover} className="object-cover" fill alt=""/>


    </div>
    <h1>{data.title}</h1>


    </div>

}



const AlPage = ({data}:{data:any}) => {

    return <div className="flex h-full w-full">
        <div className="w-[50%] flex items-center justify-center text-white px-10 ">
        <div>
        <div className="text-center">
        <h1 className="text-8xl mb-4 flower-textshadow">{data.title}</h1>
        <div className="p-2 border-2 border-white text-2xl">

        <h2>{data.title}</h2>

        </div>
        <div className="font-sans pt-5">

        <p>{data.desc}</p>

        </div>

        </div>


        </div>

        </div>
        <div className="w-[60%] h-full">

        <AlbumPicture img={data.photos}/>

        </div>







    </div>

}







export default AlbumPage