import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="flex items-center">
    <div className="min-h-[120vh] mx-auto lg:min-h-[72vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              Irfan <span className="text-accent">Khoerul Mupid</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[360px] lg:text-[60px] font-secondary font-semibold"
            >
              <span className="mr-2 text-2xl text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  " Web Developer",
                  2000,
                  " Designer",
                  2000,
                  " Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent text-2xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-sm mb-7 max-w-lg mx-auto lg:mx-0"
            >
              I am a web developer, designer, and freelancer. I am passionate
              about creating beautiful and functional websites. I have
              experience in HTML, CSS, JavaScript, React, and more. I am always
              looking for new projects and opportunities to work with others.
              Let's create something amazing together!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-4 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg mr-2">Contact Me</button>
              <a href="#about" className="text-gradient btn-link">
                My Protofolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/test" className="">
                <FaGithub className="text-2xl text-white hover:-translate-y-1" />
              </a>
              <a href="/test2" className="">
                <FaLinkedin className="text-2xl text-white hover:-translate-y-1" />
              </a>
              <a href="/test3" className="">
                <FaInstagram className="text-2xl text-white hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              src={Image}
              alt="avatar"
              className="w-[300px] h-[300px] rounded-full mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
