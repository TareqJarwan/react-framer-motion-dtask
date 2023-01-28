import React, { useEffect } from "react";
import "../Styles/dashboardPreview.scss";
import { dashboard } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DashboardPreview = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    control.start(inView ? "visible" : 'hidden');
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="app__dashboard"
    >
      <img src={dashboard} alt="" draggable={false} />
    </motion.div>
  );
};

export default DashboardPreview;
