import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss';

import { images } from '../../constants';
import { client, urlFor } from '../../client';

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])


  return (
    <section id="about" className="app__container">
      <h2 className="head-text">
        I Know That <span>Good Dev</span> <br /> Means <span>Good Buisness</span>
      </h2>
      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={`${about.titile}${index}`}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};

export default About;