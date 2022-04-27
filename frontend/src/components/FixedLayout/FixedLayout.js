import React, {useState} from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import './FixedLayout.scss';

export default function FixedLayout() {
  
  const [active, setActive] = useState('home');

  return (
    <>
      <div className="app__navigation">
        {
          ['home', 'about', 'contact', 'work', 'skills', 'testimonials'].map((item, index) => {
            return(
              <a 
                href={`#${item}`}
                key={item+index}
                className="app__navigation-dot"
                style={active === item ? {backgroundColor: '#313BAC'} : null}
                onClick={() => setActive(item)}
              />
            )
          })
        }
      </div>
      <div className="app__social">
        <ul>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
