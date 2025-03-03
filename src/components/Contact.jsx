import React, { useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaHackerrank } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_cu6qfd8',
        'template_u8dqehl',
        {
          from_name: form.name,
          to_name: "Sanket Teli",
          from_email: form.email,
          to_email: "telisanket8@gmail.com",
          mobile: form.mobile,
          message: form.message,
        },
        'x-CCqmXMJwfKcKNwI'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl w-full'
      >
        <div className='flex flex-col-reverse xl:flex-row gap-14'>
          <div className='flex-[0.50]'>
            <p className={styles.sectionSubText}>Get in touch now!</p>
            <h3 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">Just Say Hello</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-10 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <input
                  type='tel'
                  name='mobile'
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="What's your mobile number?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <textarea
                  rows={5}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          <div className='flex-[0.50]'>
            <p className={styles.sectionSubText}>Feel Free To Reach</p>
            <h3 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact Info</h3>
            <p className='text-secondary mt-10'>
            I'm seeking opportunities as a MERN Stack Developer where I can contribute my skills and grow professionally. If you're hiring, feel free to reach out!
            </p>
            <div className='mt-8'>
              <h4 className='text-white font-bold flex items-center'><FaEnvelope className='mr-2' /> Email</h4>
              <p className='text-secondary'>telisanket8@gmail.com</p>
            </div>
            <div className='mt-8'>
              <h4 className='text-white font-bold flex items-center'><FaPhone className='mr-2' /> Phone</h4>
              <p className='text-secondary'>+91 86985 92005</p>
            </div>
            <div className='mt-8'>
              <h4 className='text-white font-bold flex items-center'><FaMapMarkerAlt className='mr-2' /> Address</h4>
              <p className='text-secondary'>
                A/p Pune,<br />
                Maharashtra, India.
              </p>
            </div>
            <div className='mt-8'>
              <h4 className='text-white font-bold'>Visit my social profile and get connected</h4>
              <div className='flex gap-4 mt-4'>
                <a href="https://www.linkedin.com/in/sanketteli/" target="_blank" rel="noopener noreferrer" className='text-secondary hover:text-white'>
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/sanket08102" target="_blank" rel="noopener noreferrer" className='text-secondary hover:text-white'>
                  <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/im_s_a_n_k_e_t/" target="_blank" rel="noopener noreferrer" className='text-secondary hover:text-white'>
                  <FaInstagram size={24} />
                </a>
                <a href="https://x.com/SanketTeli4" target="_blank" rel="noopener noreferrer" className='text-secondary hover:text-white'>
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-10'
      >
        <EarthCanvas />
      </motion.div>
      <div className='text-center text-secondary mt-10'>
        &copy; {new Date().getFullYear()} Sanket Teli. All rights reserved.
      </div>
    </div>
  );
};

export default SectionWrapper(memo(Contact), "contact");
