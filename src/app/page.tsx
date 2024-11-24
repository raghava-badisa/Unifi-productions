"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useInView,
} from "motion/react";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const founderRef = useRef(null); // Reference for the section
  const founderIsInView = useInView(founderRef, { once: true });
  const footerRef = useRef(null); // Reference for the footer
  const footerIsInView = useInView(footerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 1 }, // Keeps the container visible
    visible: {
      transition: {
        staggerChildren: 0.3, // Time between each child animation
      },
    },
  };
  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <section className="sticky top-0 left-0 w-full h-[100vh]">
        <div className="w-full h-[15vh] bg-black text-white py-5 text-center ">
          <ParallaxText baseVelocity={2}>
            LEADING THE MARKETING EVOLUTION
          </ParallaxText>
          <ParallaxText baseVelocity={-2}>
            LEADING THE MARKETING EVOLUTION
          </ParallaxText>
        </div>

        <div className="w-full h-[10vh] bg-white text-black items-center justify-center flex text-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={100}
            className="h-full object-contain"
          />
        </div>
        <div className="w-full h-[100vh] bg-black text-white  text-center">
          <Image
            src={"/banner_d.JPG"}
            width={1920}
            height={1080}
            alt="banner"
            className="w-[1920px] h-[580px] object-contain"
          />
        </div>
      </section>
      {/* <section className="w-full h-[100vh] bg-white"></section> */}
      <section
        ref={ref}
        className="z-10 w-full h-[100vh] bg-white text-black flex flex-col justify-center gap-20 px-48"
      >
        <motion.div
          className="text-5xl leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p variants={lineVariants}>
            &quot;In a sea of options, be the lighthouse.
          </motion.p>
          <motion.p variants={lineVariants}>
            Guide your audience with{" "}
            <span className="bg-yellow-300">
              clarity, value, and creativity.
            </span>
          </motion.p>
          <motion.p variants={lineVariants}>
            When they see you, they&apos;ll buy from you.&quot;
          </motion.p>
        </motion.div>
        <motion.p
          className="w-full text-right text-3xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
          transition={{ delay: 0.5 }}
        >
          -We&apos;ve Done It Before. Let&apos;s Do It for You!
        </motion.p>
      </section>
      <section className="w-full h-[50vh] bg-black z-10">
        SOME GRAPHICAL ELIMENTS USING AI
      </section>
      <section className="w-full h-[100vh] bg-white z-10 text-black px-48 py-10">
        <h1 className="text-center text-4xl font-bold">
          OUR <span className="bg-yellow-300 p-2 rounded-sm">EXPERTISE</span>
        </h1>
        <p>SOCIAL MEDIA MARKETING</p>
        <p>CONTENT CREATION</p>
        <p>PAID ADVERTISING</p>
        <p>WEB DESIGN</p>
        <p>END TO END PRODUCTION</p>

        <h2>
          “UNIFI PRO IS THE Ultimate Hub for E-commerce Marketing Solutions”
        </h2>
      </section>
      <section className="w-full h-[100vh] bg-white z-10 text-black px-48 py-10">
        <h1 className="text-center text-4xl font-bold">
          What Makes Us{" "}
          <span className="bg-yellow-300 p-2 rounded-sm">Different?</span>
        </h1>
        <div className="h-full flex flex-col items-center justify-center gap-28">
          <p className="text-4xl ">
            AI e-commerce: At UNIFI PRO we use artificial intelligence (Al)
            technologies to improve the online retail experience for customers
            and businesses
          </p>
          <p className="text-4xl">
            we don&apos;t just market; we create revolutions. Our Al-powered
            strategies ensure your brand gets noticed, loved, and shared. From
            viral trends to bespoke campaigns, we redefine how marketing works
          </p>
        </div>
      </section>
      <section className="w-full h-[50vh] bg-black z-10">
        ANIMATED VIDEO
      </section>
      <section
        ref={founderRef}
        className="w-full h-[100vh] bg-white z-10 py-10 px-48 flex flex-col items-center justify-center"
      >
        {/* Founder Details */}
        <motion.div
          className="w-full flex flex-col items-center justify-start text-black gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={founderIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/founder.PNG"}
            width={150}
            height={150}
            className="rounded-full w-[150px] h-[150px] object-cover"
            alt="founder photo"
          />
          <p className="text-xl mt-5">Founder & CEO</p>
          <p className="font-bold text-2xl">RAGHAVA BADISA</p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-black text-3xl text-center my-24"
          initial={{ opacity: 0, y: 50 }}
          animate={founderIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Raghava Badisa is the founder & CEO of UNIFI PRO, a cutting-edge
          digital marketing agency dedicated to helping e-commerce businesses
          thrive in the competitive online marketplace. With a passion for
          innovation and a deep understanding of the digital landscape,
          I&apos;ve built UNIFI PRO into a trusted partner for businesses
          looking to crack the code of online marketing success.
        </motion.p>

        {/* Button */}
        <motion.button
          className="text-white text-3xl bg-black px-7 py-4 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          animate={founderIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Let’s connect <span className="text-yellow-300">TODAY</span>
        </motion.button>
      </section>
      <footer
        ref={footerRef}
        className="w-full h-full bg-black flex z-10 px-48 py-10 pt-32 gap-10"
      >
        {/* Social Media */}
        <motion.div
          className="flex-1 flex flex-col gap-5 pt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaInstagram className="text-white h-12 w-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaLinkedin className="text-white h-12 w-12" />
            </motion.div>
          </div>
          <motion.p
            className="text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            @UNIFI PRO 2024 All rights reserved
          </motion.p>
        </motion.div>

        {/* Reach out to us */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="font-bold mb-3">REACH OUT TO US TODAY</h2>
          <motion.p
            className="hover:underline transition-all duration-200"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            CALL: +91 7995877636
          </motion.p>
          <motion.p
            className="hover:underline transition-all duration-200"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            E-MAIL: UNIFIPRODUCTIONS@GMAIL.COM
          </motion.p>
        </motion.div>

        {/* Our Address */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <h2 className="font-bold mb-3">OUR ADDRESS</h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Plot No. 833, 9th Phase,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            KPH Colony, Hyderabad, Telangana 50008
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden tracking-widest leading-3 m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-bold uppercase text-4xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
