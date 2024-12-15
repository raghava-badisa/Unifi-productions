"use client";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
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
import { FaSquareXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const expertiseList = [
  {
    title: "SOCIAL MEDIAL MARKETING",
    icon: "/mic.PNG",
  },
  {
    title: "CONTENT CREATION",
    icon: "/notes.PNG",
  },
  {
    title: "PAID ADVERTISING",
    icon: "/ads.PNG",
  },
  {
    title: "WEB DESIGN",
    icon: "/net.PNG",
  },
  {
    title: "END TO END PRODUCTION",
    icon: "/film.PNG",
  },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const founderRef = useRef(null); // Reference for the section
  const founderIsInView = useInView(founderRef, { once: true });
  const footerRef = useRef(null); // Reference for the footer
  const footerIsInView = useInView(footerRef, { once: true });
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const router = useRouter();

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
  const containerRef = useRef(null);
  const diffRef = useRef(null);
  const diffIsInView = useInView(diffRef, {
    once: true, // 50% of the element needs to be in view to trigger the animation
  });

  const redirectToWhatsApp = () => {
    const phoneNumber = "7995877636";
    const message = encodeURIComponent(
      "Hi! I’d like to connect with you today. Let's discuss further."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="font-libreFranklin relative w-full h-full flex flex-col items-center justify-center bg-white">
      {/* whatsapp float */}
      <a
        title="whatsapp icons"
        className="h-14 w-14 sticky top-[90%] sm:left-[90%]  left-[80%] z-50 cursor-pointer "
        onClick={redirectToWhatsApp}
      >
        <Image
          src={"/social.png"}
          alt="whatsapp"
          width={50}
          height={50}
          className="h-14 w-14 cursor-pointer"
        />
      </a>
      {/* header */}
      <section className=" w-full sm:h-[100vh] h-full">
        <div className="w-full sm:h-[15vh] h-full bg-black text-white py-5 text-center -mt-14">
          <ParallaxText baseVelocity={2}>
            LEADING THE MARKETING EVOLUTION
          </ParallaxText>
          <ParallaxText baseVelocity={-2}>
            LEADING THE MARKETING EVOLUTION
          </ParallaxText>
        </div>

        <div className="w-full sm:h-[10vh] h-full bg-white text-black items-center justify-center flex text-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={150}
            height={100}
            className="h-full object-contain"
          />
        </div>
        <div className="w-full sm:h-[100vh] h-[90vh] bg-black text-white text-center">
          {isDesktop ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[1920px] h-[580px] object-cover"
            >
              <source src="/video_d.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[90vh] object-cover"
            >
              <source src="/video_m.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      {/* head caption */}
      <section
        ref={ref}
        className="z-10 w-full sm:py-0 py-5 sm:h-[100vh] h-full bg-white text-black flex flex-col justify-center gap-5 sm:px-48 px-5"
      >
        <motion.div
          className="sm:text-5xl text-2xl leading-relaxed"
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
          className="w-full text-right sm:text-3xl text-xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
          transition={{ delay: 0.5 }}
        >
          -We&apos;ve Done It Before. Let&apos;s Do It for You!
        </motion.p>
      </section>
      {/* ai image */}
      <section className="w-full sm:h-[80vh] h-[50vh] bg-black z-10">
        <Image
          src="/ai_b.PNG"
          alt="ai generated image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </section>
      {/* expertise list */}
      <section
        ref={containerRef}
        className="relative w-full h-full bg-white z-10 text-black sm:px-48 px-5 pt-16 pb-3"
      >
        {/* Title */}
        <h1 className=" bg-white w-full text-center sm:text-4xl text-3xl font-bold mb-8">
          OUR{" "}
          <span className="bg-yellow-300 px-3 py-1 rounded-sm">EXPERTISE</span>
        </h1>

        {/* Expertise List */}
        <div className="w-full ">
          <ul className="sm:grid sm:grid-cols-2 sm:gap-5">
            {expertiseList.map((item, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-center text-lg sm:text-3xl font-medium gap-2 my-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-primary">
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={100}
                    height={20}
                  />
                </span>{" "}
                {/* Use an arrow or point */}
                <span className="mt-5 sm:text-xl">{item.title}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <h2 className="mt-12 text-center text-xl sm:text-2xl font-semibold italic text-gray-600">
          “UNIFI PRO IS THE Ultimate Hub for E-commerce Marketing Solutions”
        </h2>
      </section>
      {/* difference */}
      <section
        ref={diffRef}
        className="w-full sm:h-[100vh] h-full bg-white z-10 text-black sm:px-48 px-5 py-10"
      >
        {/* Title */}
        <motion.h1
          className="text-center sm:text-3  xl text-3xl font-bold pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: diffIsInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          What Makes Us{" "}
          <span className="bg-yellow-300 p-2 rounded-sm">Different?</span>
        </motion.h1>

        {/* Content */}
        <div className="h-full flex flex-col items-center justify-center gap-10">
          <motion.p
            className="sm:text-4xl text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: diffIsInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AI e-commerce: At UNIFI PRO we use artificial intelligence (AI)
            technologies to improve the online retail experience for customers
            and businesses
          </motion.p>

          <motion.p
            className="sm:text-4xl text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: diffIsInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We don&apos;t just market; we create revolutions. Our AI-powered
            strategies ensure your brand gets noticed, loved, and shared. From
            viral trends to bespoke campaigns, we redefine how marketing works.
          </motion.p>
        </div>
      </section>
      <section className="w-full sm:h-[80vh] h-[90vh] bg-black text-white text-center">
        {isDesktop ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[1920px] h-[580px] object-cover"
          >
            <source src="/ani_d.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[90vh] object-cover"
          >
            <source src="/ani_d.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </section>
      <section
        ref={founderRef}
        className="w-full  h-full bg-white z-10 py-10 sm:px-48 px-5 flex flex-col items-center justify-center"
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
          className="text-black sm:text-3xl text-xl text-left my-10"
          initial={{ opacity: 0, y: 50 }}
          animate={founderIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Raghava Badisa is the founder & CEO of UNIFI PRO, a cutting-edge
          digital marketing agency dedicated to helping e-commerce businesses
          thrive in the competitive online marketplace. With a passion for
          innovation and a deep understanding of the digital landscape, we have
          build UNIFI PRO into a trusted partner for businesses looking to crack
          the code of online marketing success.
        </motion.p>

        {/* Button */}
        <motion.button
          className="text-white sm:text-3xl text-xl bg-black sm:px-7 sm:py-4 px-5 py-2 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          animate={founderIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={redirectToWhatsApp}
        >
          Let’s connect <span className="text-yellow-300">TODAY</span>
        </motion.button>
      </section>
      <section className="relative bg-black w-full flex flex-col items-center justify-center">
        <Image
          width={1400}
          height={500}
          src="/drone.jpg"
          alt="map"
          className="w-full object-contain"
        />
        <iframe
          width="80%"
          height="100%"
          className="sm:h-[600px] h-full sm:px-5 px-2 sm:py-10 py-2 absolute"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Salivahana%20colony,%209th%20Phase,%20Kukatpally%20Housing%20Board%20Colony,%20Hyderabad,%20Telangana%20500085+(Unifi%20Productions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
      <footer
        ref={footerRef}
        className="w-full h-full bg-black flex flex-col md:flex-row z-10 px-6 md:px-24 lg:px-48 py-10 pt-16 md:pt-32 gap-6 md:gap-10"
      >
        {/* Social Media */}
        <motion.div
          className="flex-1 flex flex-col gap-5 pt-10 md:pt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              onClick={() =>
                router.push(
                  "https://www.instagram.com/raghava_badisa?igsh=eTVmbjR2ZDN1Mmxy&utm_source=qr"
                )
              }
            >
              <FaInstagram className="text-white h-8 w-8 md:h-12 md:w-12 cursor-pointer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              onClick={() =>
                router.push(
                  "https://in.linkedin.com/in/raghava-badisa-129b4a186"
                )
              }
            >
              <FaLinkedin className="text-white h-8 w-8 md:h-12 md:w-12 cursor-pointer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              onClick={() => router.push("https://twitter.com/raghavabadisa")}
            >
              <FaSquareXTwitter className="text-white h-8 w-8 md:h-12 md:w-12 cursor-pointer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              onClick={() =>
                router.push(
                  "https://youtube.com/@raghava9999?si=ZfVpEcvNJAWPS17-"
                )
              }
            >
              <FaYoutube className="text-white h-8 w-8 md:h-12 md:w-12 cursor-pointer" />
            </motion.div>
          </div>
          <motion.p
            className="text-xs md:text-sm text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            @UNIFI PRO 2024 All rights reserved
          </motion.p>
        </motion.div>

        {/* Reach out to us */}
        <motion.div
          className="flex flex-col gap-2 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="font-bold text-sm md:text-base mb-2">
            REACH OUT TO US TODAY
          </h2>
          <motion.p
            className="hover:underline transition-all duration-200 text-xs md:text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            CALL: +91 7995877636
          </motion.p>
          <motion.p
            className="hover:underline transition-all duration-200 text-xs md:text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            E-MAIL: unifiproductions@gmail.com
          </motion.p>
        </motion.div>

        {/* Our Address */}
        <motion.div
          className="flex flex-col gap-2 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <h2 className="font-bold text-sm md:text-base mb-2">OUR ADDRESS</h2>
          <motion.p
            className="text-xs md:text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Plot No. 833, 9th Phase,
          </motion.p>
          <motion.p
            className="text-xs md:text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={footerIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            KPHB Colony, Hyderabad, Telangana 500085
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
        className="font-bold uppercase sm:text-4xl text-2xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className="mx-4">{children}</span>
        <span className="mx-4">{children}</span>
        <span className="mx-4">{children}</span>
        <span className="mx-4">{children}</span>
      </motion.div>
    </div>
  );
}
