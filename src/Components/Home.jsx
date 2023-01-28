// Packages
import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styles
import "../Styles/home.scss";

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const item = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-50%",
    },
  };

  useEffect(() => {
    control.start(inView ? "visible" : 'hidden');
  }, [control, inView]);

  return (
    <div className="app__home" id="home">
      <motion.div
        initial="hidden"
        animate={control}
        variants={list}
        ref={ref}
        className="home__text"
      >
        <motion.h1 variants={item}>Make Your Business</motion.h1>
        <motion.h1 variants={item}>More Powerful</motion.h1>
      </motion.div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick />
          </span>
          Lifetime Support
        </p>
        <p>
          <span>
            <TiTick />
          </span>
          No NCC Register
        </p>
      </div>
      <div className="input__container">
        <input type="text" placeholder="Input your email" />
        <button>Try fro free</button>
      </div>
    </div>
  );
};

export default Home;
