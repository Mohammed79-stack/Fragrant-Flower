import {motion} from 'framer-motion'

const ImageMirror = ({imgUrl, pur, index}:{imgUrl:string, pur:boolean, index:number}) => {
  return (
    <motion.div
    initial={{rotate:10, opacity:0, scale:2}}
    animate={{rotate:0, opacity:1, scale:1}}
    exit={{rotate:-10, opacity:0, scale:2}}
    transition={{delay: 0.7 * index + 1}}
    className="size-40 bg-white p-2 shadow-[5px_10px_2px] shadow-[#00000062] relative hover:rotate-4 hover:scale-[1.1] duration-200 ">
        <div 
        style={{backgroundColor:pur ? '#C781DE' : '#81BFDE', left:pur ? -15 : 100, rotate:pur ? '-25deg' : '25deg'}}
        className="absolute top-0 left-0 w-[50%] h-10">

        </div>

        <img src={imgUrl} className="w-full h-full object-cover" alt="" />

    </motion.div>
  )
}

export default ImageMirror