import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type TimeLineData = {
  id: string;
  name: string;
  paragraphs: {
    title: string;
    content: string;
  }[];
  img: string[];
};

type FullType = {
  data: TimeLineData;
  index: number;
  activeIndex: number | undefined;
  setActiveIndex: Dispatch<SetStateAction<number | undefined>>;
};

const StoryParallax = ({
  data,
  index,
  activeIndex,
  setActiveIndex,
}: FullType) => {
  const targetShow = activeIndex === index;

  const ref = useRef(null);
  const [indexes, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const movingIndex = useTransform(scrollYProgress, (v) => {
    const step = 1 / data.paragraphs.length;

    return Math.min(
      data.paragraphs.length - 1,
      Math.floor(v / step)
    );
  });

  useEffect(() => {
    return movingIndex.on("change", (latest) => {
      setIndex(latest);
    });
  }, [movingIndex]);

  return (
    <div ref={ref} className="h-[400vh] relative pt-40">
      <motion.div
        onViewportEnter={() => setActiveIndex(index)}
        onViewportLeave={() => setActiveIndex(undefined)}
        viewport={{ amount: 0.5 }}
        className="sticky top-0 h-screen"
      >

        <AnimatePresence mode="wait">
          {targetShow && (
      <>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:'10%'}}
      key={indexes}
      exit={{opacity:0}}
      transition={{delay:2}}
      style={{maskImage: "radial-gradient(circle, white 200px, transparent 470px)"}}
      className="absolute w-full h-full flex justify-center items-end top-0 left-0 -z-1 bg-white">
      
      <Image src={data.img[indexes]} alt="" width={700} height={700} className="object-cover mix-blend-luminosity"/>

      </motion.div>

            <motion.div
              key={data.id}
              className="pt-30 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Character Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                }}
                style={{ x: "55%" }}
                className="size-20 z-10 origin-center bg-linear-to-r from-[#1a2a3a] to-[#533d86] rounded-full absolute right-full flex items-center justify-center text-white text-2xl top-40"
              >
                {data.name.split(" ")[0][0]}
                {data.name.split(" ")[1]?.[0]}
              </motion.div>

              {/* Slide Animation Per Paragraph */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${data.id}-${indexes}`}
                  initial={{
                    opacity: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="flex gap-14 h-full items-center"
                >
                  {/* IMAGE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -50,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: -50,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.7,
                      delay:0.7,
                      ease: "easeOut",
                    }}
                    className="w-[50%] h-full overflow-hidden"
                  >
                    <motion.img
                      src={data.img[indexes]}
                      alt={data.name}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1.2,
                        delay:0.6
                      }}
                      className="h-full object-cover saturate-30 drop-shadow-[0_0_10px] drop-shadow-[#5c375f] "
                    />
                  </motion.div>

                  {/* TEXT SECTION */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 50,
                    }}
                    transition={{
                      duration: 0.7,
                      delay:0.6,
                      ease: "easeOut",
                    }}
                    className="w-[50%] py-10"
                  >
                    <div className="bg-linear-to-r from-[#1a2a3a] to-[#533d86] overflow-hidden shadow-[0_0_20px] shadow-[#0000007c]">
                      {/* TITLE */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.15,
                          duration: 0.5,
                        }}
                        className="text-2xl mb-2 bg-black text-white p-4"
                      >
                        <h1>{data.paragraphs[indexes].title}</h1>
                      </motion.div>

                      {/* PARAGRAPH */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 60,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -60,
                        }}
                        transition={{
                          delay: 0.25,
                          duration: 0.6,
                        }}
                        className="text-xl p-4 font-thin text-white"
                      >
                        <p>{data.paragraphs[indexes].content}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default StoryParallax;