import {timelineData} from '@/Data/TimeLine'
import StoryParallax from './Ui/StoryParallax'
import Container from './Wrappers/Container'
import { useState } from 'react'

const Timeline = () => {

    const [activeIndex, setActiveIndex] = useState()
    console.log(activeIndex)

  return (
    <div className="">
    <div className='h-[20vh] w-full absolute bg-linear-to-b from-primary to-transparent z-10' />
    <Container additions='relative'>
    <div className='absolute left-0 top-0 w-1.5 bg-linear-to-r from-[#1a2a3a] to-[#533d86] h-full'/>
    {

        timelineData.map((el, index) => (<StoryParallax key={el.id} data={el} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></StoryParallax>))

    }

    </Container>

    </div>
  )
}

export default Timeline