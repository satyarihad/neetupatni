"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="container mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-bold">
              Neetu
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Senior Product Owner with 15+ years of experience
              building SaaS, FinTech, Blockchain, Agritech,
              EdTech and Web3 products.
            </p>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link.title}
                  </Link>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail className="text-cyan-400" />

                <a
                  href="mailto:neetupatni5@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  neetupatni5@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="text-cyan-400" />

                <a
                  href="tel:+919887681149"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  +91 9887681149
                </a>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-cyan-400 text-lg">
                  <FaLinkedinIn size={20} />
                </span>

                <a
                  href="https://linkedin.com/in/neetupatni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Neetu Patni. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-full shadow-lg"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

    </footer>
  );
}