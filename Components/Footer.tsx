
import Image from "next/image"
import Container from "./Wrappers/Container"
import { SiAmericanairlines, SiSouthwestairlines } from "react-icons/si";
import { SiLine } from "react-icons/si"


const Footer = () => {

const dateYear = new Date().getFullYear()

  return (
    <div className="flex flex-col bg-linear-to-r from-[#1a2a3a] to-[#533d86] font-secondory">


    {/* Text Side */}
    <div className="py-10 relative">
    <Container>
    <div className="flex justify-between items-center">
    <div className="flex flex-col pt-4">
    <div className="flex gap-4 items-center">

    <Image src={"/Valy.png"} alt="valy" className="hue-rotate-210 drop-shadow-[#49538f] drop-shadow-[2px_0_1px] mix-blend-luminosity contrast-150" width={60} height={60}/>
    <SiSouthwestairlines size={45} className="scale-[1] drop-shadow-[#000] drop-shadow-[2px_0_1px] opacity-40" color="#B1A8BF" />
    <Image src={"/pit.png"} className="-mx-4 hue-rotate-75 mix-blend-luminosity drop-shadow-[#49538f] drop-shadow-[2px_0_1px] contrast-150" alt="valy" width={85} height={85}/>

    </div>

    <div className="text-white text-sm my-4 w-full max-w-[60%] leading-6 text-shadow-[0_0_4px] text-shadow-[#fff]">

    <p className="font-secondory">
      This website was made with love for waguri
      this work is related to the partners.
    </p>

    </div>

    </div>

    <div className="flex gap-8">

    <div>
    <h2 className="font-bold my-2 text-[#927ffc] text-xl border-b-2 border-[#927ffc]">Our Inspiration</h2>
    <ul className="text-[#796dc2] font-[600]">
    <li>Think....</li>
    <li>Design...</li>
    <li>Create..</li>


    </ul>

    </div>


        <div>
    <h2 className="font-bold my-2 text-[#927ffc] text-xl border-b-2 border-[#927ffc]">Contributed by</h2>
    <ul className="text-[#796dc2] font-[600]">
    <li className="relative cursor-pointer hover:scale-[1.1] duration-300">
      <div className="bg-[#5e439e] absolute h-full w-full">

      <img 
      className="absolute w-full h-full object-cover opacity-25 contrast-140"
      src="https://media1.tenor.com/m/OQMh705geeoAAAAd/kaoruko-waguri-the-fragrant-flower-blooms-with-dignity.gif" alt="" />
      
      </div>
      <h2 className="relative z-4 py-2 px-2 text-white">17m9</h2>
      </li>

    </ul>

    </div>


    </div>


    </div>

    </Container>



    </div>




    {/* Cover Side */}
    <div
    style={{maskImage: "radial-gradient(circle, white 20px, transparent 870px)"}}
    className="h-[50vh] mix-blend-luminosity opacity-15 relative">
    <div className="h-[12vh] w-full top-0 absolute bg-linear-to-b from-[#1a2a3a] to-[#533d861a]" />
    <img src={'/footerCover3.webp'} alt="flowerFotter" className="object-cover w-full h-full"/>

    </div>
    <div className="py-2 text-center text-[#7e5ec9] text-shadow-[#7e5ec98e] text-shadow-[0_0_8px] bg-[#131333] shadow-[#342e63] shadow-[0_-10px_20px]">

    <p className="font-bold text-sm">© {dateYear} PIT All rights reserved.</p>
    <p className="text-sm">Website design, layout, UI/UX, and custom development are the intellectual property of PIT.</p>


    </div>
    </div>
  )
}

export default Footer