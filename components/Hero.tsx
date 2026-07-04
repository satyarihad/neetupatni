"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, LinkIcon } from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "8+",
    label: "Years in Product Management",
  },
  {
    number: "30+",
    label: "Products Delivered",
  },
  {
    number: "10+",
    label: "Industries",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              Welcome to my Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Neetu
              <span className="text-cyan-400"> Patni</span>
            </h1>

            <h2 className="mt-5 text-2xl lg:text-3xl font-semibold text-gray-300">
              Senior Product Owner
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
              Passionate Product Leader with 15+ years of experience
              delivering SaaS, FinTech, Blockchain, Web3,
              Agritech and EdTech products from concept
              to successful market launch.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-xl font-semibold text-white"
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/neetupatni"
                target="_blank"
                className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition px-7 py-4 rounded-xl font-semibold"
              >
                <LinkIcon size={20} />
                LinkedIn
              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.number}
                  </h3>

                  <p className="text-sm mt-2 text-gray-300">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative rounded-full border-4 border-cyan-500 p-2">

                <Image
                  src="/profile.png"
                  alt="Neetu Patni"
                  width={420}
                  height={420}
                  priority
                  className="rounded-full object-cover w-[350px] h-[350px] lg:w-[430px] lg:h-[430px]"
                />

              </div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -bottom-6 -left-8 bg-white text-slate-900 px-6 py-4 rounded-xl shadow-xl"
              >
                <h3 className="font-bold text-xl">
                  CSPO
                </h3>

                <p className="text-sm">
                  Certified Scrum Product Owner
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}