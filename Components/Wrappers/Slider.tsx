
import { AnimatePresence } from "motion/react";
import {
  Children,
  createContext,
  useState,
} from "react";

type SliderContextType = {
  curr: number;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
    variants: any
};

export const CurrContext = createContext<SliderContextType>({curr:0, setCurr:()=> {}, variants: {}});
const Slider = ({children, type}:{children:React.ReactNode, type:string}) => {
  
    const selectiveVarient = (type:string) => {

        switch(type){

            case 'album':
                return {
                    initial: {scale:1.2, x:'100%', opacity:0, filter:'blur(10px)'},
                    visible: {scale:1, x:0, opacity:1, filter:'blur(0px)', transition: {scale:{delay:0.5}, filter:{delay:0.5}}},
                    invisible: {scale:1.2, x:'100%',filter:'blur(10px)', opacity:0, transition:{x:{delay:0.5},filter:{delay:0.4}, opacity:{delay:0.5}}}
                }



        }



    } 


    
    
    const variants = selectiveVarient(type)
    const arrChild = Children.toArray(children)
    const [curr, setCurr] = useState(0);
    
    return (
    <div className="relative h-full w-full">

    <CurrContext.Provider value={{curr, setCurr,variants }}>
        <AnimatePresence mode="wait">
    {arrChild[curr]}
    </AnimatePresence>
    </CurrContext.Provider>

    


    </div>
  )
}

export default Slider