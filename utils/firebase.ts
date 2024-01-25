import { useEffect } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { Firestore, collection, getFirestore } from "firebase/firestore";
import "firebase/analytics";
import { useRouter } from "next/router";
import { SCREEN_VIEW } from "./event";

interface EventTrackingHook {
  trackEvent: (event_name: string, event_params?: Record<string, any>) => void;
}
const firebaseConfig = {
  apiKey: "AIzaSyD2xqb8OFX5IEjmEbZjm86W6tKae8FO0nY",
  authDomain: "portfolio-93f27.firebaseapp.com",
  projectId: "portfolio-93f27",
  storageBucket: "portfolio-93f27.appspot.com",
  messagingSenderId: "1062558378636",
  appId: "1:1062558378636:web:191594f62650a8fbe729a9",
  measurementId: "G-BH6M3J6SQT",
};

let app: FirebaseApp;
let analytics: Analytics;
let db: Firestore;
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);
}

const useEventTracking = (): EventTrackingHook => {
  const router = useRouter();
  const trackEvent = (
    event_name: string,
    event_params?: Record<string, any>
  ): void => {
    logEvent(analytics, event_name, event_params);
  };

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      trackEvent(SCREEN_VIEW, {
        firebase_screen: url,
        firebase_screen_class: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return { trackEvent };
};

export { db }; // Ensure 'db' is exported correctly

export default useEventTracking;
