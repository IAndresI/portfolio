import React, { useState } from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import './Header.scss';
import {images} from '../../constants'

const Header = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className="app__navbar">
        <a href="#home" className="app__navbar-logo">
          Dreyman<span>dinn</span>
        </a>
        <ul className="app__navbar-links">
          {
            ['home', 'about', 'contact', 'work', 'skills'].map((item) => {
              return(
                <li className="app__flex p-text" key={item}>
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            })
          }
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul className="app__navbar-links">
                  {
                    ['home', 'about', 'contact', 'work', 'skills'].map((item) => {
                      return(
                        <li key={item}>
                          <a 
                            href={`#${item}`}
                            onClick={() => setToggle(false)}
                          >
                            {item}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </motion.div>
            )
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;