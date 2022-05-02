import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import withSectionAnimation from '../../hoc/withSectionAnimation';
import { client, urlFor } from '../../client';

import './Testimonials.scss';

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const testimonialsQuery = `*[_type == "testimonials"]`;
    const brandsQuery = `*[_type == "brands"]`;

    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data)
      })

    client.fetch(brandsQuery)
      .then((data) => setBrands(data))
  }, [])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <>
      {
        testimonials.length ? 
          (
            <>
              <div className="app__testimonial-item app__flex">
                <img src={urlFor(currentTestimonial.imageUrl) } alt="testimonials" />
                <div className="app__testimonial-content">
                  <p className="p-text">{currentTestimonial.feedback}</p>
                  <div>
                    <h4 className="bold-text">{currentTestimonial.name}</h4>
                    <h5 className="bold-text">{currentTestimonial.company}</h5>
                  </div>
                </div>
              </div>
              <div className="app__testimonial-btns app__flex">
                  <div 
                    onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)} 
                    className="app__flex"
                  >
                    <HiChevronLeft />
                  </div>
                  <div 
                    onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)} 
                    className="app__flex"
                  >
                    <HiChevronRight />
                  </div>
                </div>

              {/* <div className="app__testimonials-brands app__flex">
                {
                  brands.map(brand => (
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration:0.5, type: "tween"}}
                      key={brand._id}
                    >
                      <img src={urlFor(brand.imgUrl) } alt={brand.name} />
                    </motion.div>
                  ))
                }
              </div> */}
            </>
          )
        :
          null
      }
    </>
  );
};

export default withSectionAnimation(Testimonials, 'testimonials');