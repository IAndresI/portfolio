import { motion } from 'framer-motion';
import React from 'react';

import { images } from '../../constants';
import './Preview.scss';

const Preview = () => {

  const scaleVariants = {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }

  return (
    <section id="home" className="app__container app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 1.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app-flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Dreymandinn</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 1.5, delayChildren:1.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg"/>
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 2, ease: "easeInOut"}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {
          [images.node, images.react, images.mu5, images.posgresql, images.redux].map((item) => (
            <div className="circle-cmp app__flex" key={item}>
              <img src={item} alt="circle"/>
            </div>
          ))
        }
      </motion.div>
    </section>
  );
};

export default Preview;