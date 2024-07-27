"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  items = [],
  className,
}: {
  items?: { src: string; link: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = items.length ? Math.ceil(items.length / 3) : 0;

  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div className={cn("h-[40rem] flex items-start overflow-y-auto w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] bg-slate-200 rounded-lg ", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-4 md:px-10">
        <div className="grid gap-10">
          {firstPart.map((item, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  className="object-cover rounded-lg  hover:opacity-70"
                  layout="responsive"
                  width={400}
                  height={400}
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  className="object-cover rounded-lg hover:opacity-70"
                  layout="responsive"
                  width={400}
                  height={400}
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  className="object-cover rounded-lg hover:opacity-70"
                  layout="responsive"
                  width={400}
                  height={400}
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};