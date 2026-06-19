import Image from "next/image"
import { characters } from "@/Data/RelationData";
import { useContext } from "react";
import { RelationContext } from "../Wrappers/RelationProvider";
import ImageMirror from "./ImageMirror";
import List from "./List";
import {motion} from 'framer-motion'

const RelationSection = () => {

    const context = useContext(RelationContext)
    if(!context) return;
    const specifiedData = characters[context.catg]

  return (
    <motion.div
    key={context.catg}
    className="h-full py-20 px-8 flex justify-center gap-2">
      <motion.div 
      initial={{opacity:'0'}}
      animate={{opacity:'30%',}}
      exit={{opacity:'0',}}
      style={{maskImage: "radial-gradient(circle, white 100px, transparent 460px)"}}
      className="absolute left-1/2 top-1/2 -translate-1/2 w-[80%] h-[80%] -z-1 mix-blend-luminosity opacity-30"><Image className="w-full h-full object-cover" src={specifiedData.cover} fill alt="" />
      </motion.div>


    {/* Image section */}
    <motion.div
    initial={{opacity:0, x:-50}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:50}}
    transition={{duration:0.7}}
    className="w-[20%] flex flex-center">

    <Image src={specifiedData.images['fullBody']} width={240} height={240} alt="" />

    </motion.div>


    <div className="w-[50%] flex gap-18">
    
    <div className="flex flex-col gap-8">
    {

    Object.values(specifiedData.images).slice(1).map((link,index) => <ImageMirror key={link} index={index} pur={index % 2 != 0 ? true : false} imgUrl={link}/>)

    }
    
    </div>

    <div className="w-full flex flex-col gap-4">
    
    <motion.div
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:50}}
    className="w-full relative rounded-md overflow-hidden">
    {/* <div className="w-20 h-10 -left-5 -top-2 bg-[#C781DE] -rotate-20 absolute"></div>
    <div className="w-20 h-10 -right-5 -top-2 bg-[#C781DE] rotate-20 absolute"></div> */}

    <div className="flex justify-between px-4 py-2 items-center bg-linear-to-r from-[#1a2a3a] to-[#533d86] text-white">

    <h2 className="text-xl">{specifiedData.description[0]}</h2>
    <h2>{specifiedData.name}</h2>
    </div>
    <div className="bg-[#fafafa] shadow-[2px_2px_4px] shadow-[#00000071] p-4 flex gap-4">
      
      <div className="size-50">
      
      <img src={specifiedData.studentImg} className="w-full h-full object-cover" alt=""/>

      </div>

      <div className="flex gap-4 font-secondory">

      <div className="text-md flex flex-col gap-2 justify-center">
      <h2 className="">Name : {specifiedData.name}</h2>
      <h2 className="">Hobby : {specifiedData.hobby}</h2>
      <h2 className="">Dating : {specifiedData.Relationship}</h2>
      </div>

      <div className="text-md flex flex-col gap-2 justify-center">
      <h2 className="">Name : {specifiedData.name}</h2>
      <h2 className="">Hobby : {specifiedData.hobby}</h2>
      <h2 className="">Dating : {specifiedData.Relationship}</h2>

      </div>


      </div>


    </div>

      <div className="bg-linear-to-r from-[#1a2a3a] to-[#533d86] p-4"/>
    </motion.div>


    <List descArr={specifiedData.description}/>


    </div>


    </div>


    </motion.div>
  );
};


export default RelationSection