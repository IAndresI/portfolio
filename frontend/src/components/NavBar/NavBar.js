import React, { useState } from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import './NavBar.scss';
import {images} from '../../constants'

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app_navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
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
  );
};

export default NavBar;