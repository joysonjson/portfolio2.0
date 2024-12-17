import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SESSION_END, SESSION_START } from "@/utils/event";
// import useEventTracking from "@/utils/firebase";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  // const { trackEvent } = useEventTracking();

  useEffect(() => {
    // trackEvent(SESSION_START);
    // return () => {
    //   trackEvent(SESSION_END);
    // };
  }, []);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  return (
    <>
      <Component {...pageProps} key={router.pathname} />
    </>
  );
}
