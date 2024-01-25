import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project from "./Project";

const porjectData = [
  {
    name: "SDK Development",
    image: "/images/vectors/xcframework.webp",
    url: "https://developers.helpshift.com/sdkx_ios/",
    description:
      "SDKs that developers can integrate into their iOS App. These SDKs facilitate the implementation of various support features seamlessly within the app. The Helpshift SDK offers in-app messaging, knowledge base integration, automated bots, customizable UI components, rich media support, real-time analytics, multi-language support, and continuous updates for seamless customer support within mobile applications.",
  },
  {
    name: "Cross-Platform Plugins",
    image: "/images/vectors/code.jpg",
    url: "https://developers.helpshift.com/",
    description:
      "versatile plugins to seamlessly integrate customer support features into various platforms. Supported platforms include iOS and Android, with dedicated plugins for React Native, Unreal Engine, Unity, and Cocos. The plugins provide in-app messaging, knowledge base access, automated bots, and customization options for developers. With support for popular frameworks",
  },
  {
    name: "Education App Development",
    image: "/images/vectors/edtech.avif",
    url: "https://mobishaala.com/",
    description:
      "Mobishaala's Ed Tech projects on iOS likely involved the development of educational applications with features like video lessons, interactive quizzes, and note-taking functionalities. As the sole iOS developer, you had end-to-end responsibility for conceptualization, design, implementation, testing, and deployment. The projects may have included iPad integration, optimizing content for a larger screen, and creating engaging user interfaces for effective learning interactions. Collaboration with educators and subject matter experts would have been crucial, ",
  },
  {
    name: "Resolve Go and Resolve Disc",
    url: "",
    image:
      "https://joysonjson.github.io/joysonjson/images/Resolve_Go_product.png",
    description:
      "I played a key role in developing the iOS app for Resolve Digital Health's groundbreaking Resolve Go, the smallest smart cannabis oil vaporizer in the industry. The app, featuring Bluetooth Low Energy (BLE) connectivity, enabled monitoring of the device, stored patient usage data, incorporated child safety locks, and facilitated firmware updates for an enhanced user experience.",
  },
  {
    name: "Beacon",
    image: "/images/vectors/becon.jpg",
    url: "",
    description:
      "I contributed to the development of Beacon, a ground reporting app designed for technicians in a telecommunication network company. The app allows technicians to report network issues directly. Key features include map functionality using the ArcGIS map SDK, enabling the addition of markers at specific locations to identify various issues. The implementation spans both iPhone and iPad, accommodating different orientations for a seamless user experience. Additionally, the app features a single sign-on implementation to streamline access for technicians.",
  },
  {
    name: "Charzer",
    image: "/images/vectors/charger.avif",
    url: "https://www.charzer.com/charzer-app",
    description:
      "I led the development of the cross-platform React Native application for Charzer, a versatile platform enabling users to book electric vehicle chargers, add them to the network, and view charger locations on a map. The app, available on both Android and iOS, facilitates seamless payments and integrates with BLE and Azure IoT-powered chargers. My role focused on creating a robust and user-friendly application to enhance the electric vehicle charging experience across both major mobile platforms.      ",
  },
  {
    name: "Kubu",
    image: "/images/vectors/kubu.avif",
    url: "https://getkubu.com/",
    description:
      "I developed the iOS app for Kubu Smart Lock, a door lock monitor utilizing IBM MQTT to detect changes in door status and update users in real-time. The app maintains a history log of door status changes, offers a guest access feature, and employs a perimeter feature to prevent leaving the home unlocked. Additionally, users can schedule notifications based on their preferences. ",
  },
];

const HorizontalScrollCarouselProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <h3 className=" sticky top-16 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-4">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            style={{ x }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
          >
            <div className="relative w-full flex space-x-5 overflow-y-hidden snap-x snap-mandatory z-20">
              {porjectData.map(({ name, description, image, url }) => {
                return (
                  <Project
                    src={image}
                    key={name}
                    name={name}
                    description={description}
                    url={url}
                  />
                );
              })}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselProjects;
