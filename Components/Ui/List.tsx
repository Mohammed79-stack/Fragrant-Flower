import {motion} from 'framer-motion'

const List = ({descArr}:{descArr:string[]}) => {
  
    return (
    <motion.div
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:50}}
    transition={{delay:0.2}}
    className="bg-[#ffffff] p-4 rounded-2xl shadow-[2px_2px_4px] shadow-[#00000071]">

    <ul>
    {
        descArr.map((el, index) => <li key={el} style={{borderBottom:index != descArr.length - 1 ? '1px solid #000' : ''}} className="py-2">{el}</li>)
    }
    </ul>

    </motion.div>
  )
}

export default List