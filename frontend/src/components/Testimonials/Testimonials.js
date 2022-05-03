import React, { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import withSectionAnimation from '../../hoc/withSectionAnimation';
import { client, urlFor } from '../../client';

import './Testimonials.scss';

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [[page, direction], setPage] = useState([0,0])

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

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if(newPage < 0) {
      setPage([testimonials.length - 1, newDirection]);
    }
    else if (newPage > testimonials.length - 1) {
      setPage([0, newDirection]);
    }
    else {
      setPage([newPage, newDirection]);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const currentTestimonial = testimonials[page];

  return (
    <>
      {
        testimonials.length ? 
          (
            <>
              <AnimatePresence initial={false} custom={direction}>
                <div className="app__testimonials-inner">
                  <motion.div
                    key={page}
                    custom={direction}
                    src={currentTestimonial}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30},
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                    
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1)
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1)
                      }
                    }}
                  >

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

                  </motion.div>
                </div>
              </AnimatePresence>
              <div className="app__testimonial-btns app__flex">
                  <div 
                    onClick={() => paginate(1)} 
                    className="app__flex"
                  >
                    <HiChevronLeft />
                  </div>
                  <div 
                    onClick={() =>  paginate(-1)} 
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