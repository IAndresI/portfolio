import { motion } from 'framer-motion'
import React from 'react'


export default function withSectionAnimation(Component,id, classNames) {
  return function HOC() {
    return (
      <section id={id} className={`app__container ${classNames ? classNames : ''}`}>
        <motion.div
          whileInView={{y: [100,50,0],opacity: [0, 0, 1]}}
          style={{width: '100%'}}
          transition={{duration:0.5}}
          className={`app__inner`}
        >
          <Component />
        </motion.div>
      </section>
      
    )
  }
}
