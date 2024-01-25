import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { SESSION_END, SESSION_START } from "@/utils/event";
import useEventTracking from "@/utils/firebase";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps, router }: AppProps) {
  const { trackEvent } = useEventTracking();

  useEffect(() => {
    trackEvent(SESSION_START);
    return () => {
      trackEvent(SESSION_END);
    };
  }, []);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  return (
    <>
      {/* <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container"
        > */}
      <Component {...pageProps} key={router.pathname} />
      <ToastContainer />

      {/* </motion.div>
      </div> */}
    </>
  );
}
