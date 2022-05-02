import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { client } from '../../client';
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name: inputName, value } = e.target;

    switch (inputName) {
      case 'name':
        setName(value)
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <footer id="contact" className="app__whitebg">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        style={{ width: '100%' }}
        transition={{ duration: 0.5 }}
        className={`app__flex app__container`}
      >
        <h2 className="head-text">Take a coffe & chat with me</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="Email" />
            <a href="mailto:andrei200277@gmail.com" className="p-text">andrei200277@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a href="tel:89117628448" className="p-text">+7 (911) 762 84-48</a>
          </div>
        </div>
        {
          isFormSubmitted ?
            (
              <div>
                <h3 className="head-text">
                  Thank you for getting in touch!
                </h3>
              </div>
            )
            :
            (
              <div className="app__footer-form app__flex">
                <div className="app__flex">
                  <input
                    type="text"
                    className="p-text"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <input
                    type="email"
                    className="p-text"
                    placeholder="Your email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <textarea
                    className="p-text"
                    placeholder="Your message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                  />
                </div>
                <button
                  className="p-text"
                  type='button'
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {
                    loading ?
                      'Sending'
                      :
                      'Send Message'
                  }
                </button>
              </div>
            )
        }
      </motion.div>
    </footer>
  );
};

export default Footer;