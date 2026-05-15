import Image from "next/image"
import Container from "./Wrappers/Container"
import LinksList from "./Wrappers/LinksList"

const Header = () => {
  return (
    <div className="relative">
      <Container>
        <div className="py-10 flex flex-between relative">


        <LinksList dataLink={['Waguri','Memories','Relationships']}/>

          <div className="absolute left-1/2 -translate-x-1/2">
          <Image src='/logo.png' className="flower-dropshadow" width={180} height={180} alt=""/>
          </div>





        <LinksList dataLink={['Waguri','Memories','Relationships']}/>

        </div>
      </Container>

    </div>
  )
}

export default Header