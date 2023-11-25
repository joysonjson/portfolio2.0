import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  return (
    <AnimatePresence>
      <div className="page-transition-wrapper  min-h-screen">
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container"
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
