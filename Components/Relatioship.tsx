import Labeling from './Wrappers/Labeling'
import RelationSection from './Ui/RelationSection'
import Container from './Wrappers/Container'
import RelationProvider from './Wrappers/RelationProvider'

import SelectiveMenu from './Ui/SelectiveMenu'
import { AnimatePresence } from 'motion/react'
const Relatioship = () => {





  return (
    <div className='relative'>
      <div className='absolute bottom-0 w-full h-[20vh] bg-linear-to-t from-primary to-transparent'></div>

    <Labeling label="Relationship"/>
    <div className='h-full flex flex-center'>
    <Container>
    <AnimatePresence mode='wait'>

    <RelationProvider>
    <SelectiveMenu />
    <RelationSection />
    </RelationProvider>
    
    </AnimatePresence>
    </Container>


    </div>
    </div>
  )
}

export default Relatioship