import Image from "next/image"
import { useContext } from "react";
import { RelationContext } from "../Wrappers/RelationProvider";
import { characters } from "@/Data/RelationData";
type CharacterKey = keyof typeof characters;
const SelectiveMenu = () => {
    const context = useContext(RelationContext)

    const selectiveId:{
  uniqueId: CharacterKey;
  img: string;

    }[] = [

        {
            uniqueId:'Rintaro',
            img:'https://i.pinimg.com/1200x/99/88/56/99885607640d7caaa9e042b8a8b061b8.jpg'
        },

        {
            uniqueId:'Waguri',
            img:'https://i.pinimg.com/736x/2e/ec/92/2eec92083d7f53e5d8bc7723b7129e2d.jpg'
        },

        {
            uniqueId:'Shohei',
            img:'https://i.pinimg.com/736x/4d/bf/9b/4dbf9b77eeedf2baf3db0adfae7f688e.jpg'
        },


        {
            uniqueId:'Ayato',
            img:'https://i.pinimg.com/736x/03/8c/07/038c074c2e0c4751d36fc5d98dd7d04a.jpg'
        },


                {
            uniqueId:'Subaru',
            img:'https://i.pinimg.com/1200x/18/bc/31/18bc31477591431ada1fcc57a868ec7e.jpg'
        },


                {
            uniqueId:'Saku',
            img:'https://i.pinimg.com/736x/e4/43/ee/e443ee9007d051dfc07302bbd3efd4ef.jpg'
        },
    ]

  return (
    <div className="flex gap-10 my-4 w-full justify-center">
  
    {

        selectiveId.map((el)=> <div className="size-[100px] bg-linear-to-r from-[#1a2a3a] to-[#533d86] shadow-[0_8px_2px] shadow-[#000000a8] hover:scale-[1.1] relative z-20 rounded-2xl overflow-hidden cursor-pointer  duration-150" key={el.uniqueId}  onClick={()=> context?.setCatg(el.uniqueId)}><Image src={el.img} className="object-cover w-full h-full mix-blend-luminosity" fill alt="" /></div>)

    }

    </div>


  )
}

export default SelectiveMenu