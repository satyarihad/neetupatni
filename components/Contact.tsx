"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work
            <span className="text-cyan-400"> Together</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">
            Looking for an experienced Product Owner or Product Manager?
            I'd love to discuss your product vision and help bring it to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-10">
              Get In Touch
            </h3>

            <div className="space-y-8">

              {/* Email */}

              <div className="flex items-center gap-5">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaEnvelope size={24} />
                </div>

                <div>
                  <p className="text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:neetupatni5@gmail.com"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    neetupatni5@gmail.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-5">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaPhoneAlt size={24} />
                </div>

                <div>

                  <p className="text-gray-400">
                    Phone
                  </p>

                  <a
                    href="tel:+919887681149"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    +91 9887681149
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-center gap-5">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaMapMarkerAlt size={24} />
                </div>

                <div>

                  <p className="text-gray-400">
                    Location
                  </p>

                  <p className="text-xl">
                    India
                  </p>

                </div>

              </div>

              {/* LinkedIn */}

              <div className="flex items-center gap-5">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaLinkedinIn size={22} />
                </div>

                <div>

                  <p className="text-gray-400">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/neetupatni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    linkedin.com/in/neetupatni
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={7}
              placeholder="Write your message..."
              className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-4 flex justify-center items-center gap-3 text-lg font-semibold"
            >
              <FaPaperPlane size={18} />

              Send Message

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}