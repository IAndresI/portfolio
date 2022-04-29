import { motion } from 'framer-motion'
import React from 'react'


export default function withSectionAnimation(Component,id, classNames) {
  return function HOC() {
    return (
      <section id={id} className={`${classNames} app__flex app__container`}>
        <motion.div
          whileInView={{y: [100,50,0],opacity: [0, 0, 1]}}
          style={{width: '100%'}}
          transition={{duration:0.5}}
          className={`${classNames}`}
        >
          <Component />
        </motion.div>
      </section>
      
    )
  }
}
