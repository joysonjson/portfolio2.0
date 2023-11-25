import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  background: string;
  children: React.ReactNode;
  rotate: any; // Replace 'any' with the correct type if possible
}

const Section: React.FC<SectionProps> = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: "2vmin", // Adjust this value as needed
      }}
    >
      {children}
    </motion.div>
  );
};

const Trippy: React.FC<{ rotate: any }> = ({ rotate }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
};

const generateSections = (
  count: number,
  color: string,
  rotate: any // Replace 'any' with the correct type if possible
): React.ReactNode => {
  if (count === NUM_SECTIONS) {
    return null;
  }

  const nextColor = color === "black" ? "white" : "black";

  return (
    <Section rotate={rotate} background={color} key={count}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const TrippyScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

export default TrippyScroll;
