import React, { useEffect, useState } from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {urlFor, client} from '../../client';
import ReactTooltip from 'react-tooltip';

import './Skills.scss';
import withSectionAnimation from '../../hoc/withSectionAnimation';

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [expiriences, setExpiriences] = useState([])

  useEffect(() => {
    const expiriencesQuery = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(expiriencesQuery)
      .then((data) => {
        setExpiriences(data)
      })

    client.fetch(skillsQuery)
      .then((data) => setSkills(data))
  }, [])

  return (
    <section id="skills" className="app__container">
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div
          className="app__skills-list"
        >
          {
            skills?.map((skill) => (
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex" style={{backgroundColor: skill.backgroundColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>)
            )
          }
        </motion.div>
        <motion.div
          className="app__skills-exp"
        >
          {
            expiriences?.map((expirience) => (
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-item"
                key={expirience.year}
              >
                <div
                  className="app__skills-exp-year"
                >
                  <p className="bold-text">{expirience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {
                    expirience?.works?.map((work) => (
                      <div
                        key={work.name}
                      >
                        <motion.div
                          whileInView={{opacity: [0, 1]}}
                          transition={{duration: 0.5}}
                          className="app__skills-exp-work"
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <div
                          className='skills-tooltip'
                        >
                          {work.desc}
                        </div>
                      </div>
                     )
                    )
                  }
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
};

export default withSectionAnimation(Skills, 'skills', 'app__whitebg');