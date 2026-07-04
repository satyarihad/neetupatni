"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBullseye,
  FaUsers,
  FaChartBar,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaBriefcase size={30} />,
    title: "15+ Years Experience",
    description:
      "Extensive experience delivering enterprise software products across multiple industries.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Product Strategy",
    description:
      "Experienced in defining product vision, roadmap planning and go-to-market execution.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Stakeholder Management",
    description:
      "Successfully collaborated with engineering teams, business leaders and customers.",
  },
  {
    icon: <FaChartBar size={30} />,
    title: "Data Driven",
    description:
      "Focused on analytics, customer feedback and business metrics for product decisions.",
  },
];

const industries = [
  "SaaS",
  "FinTech",
  "Blockchain",
  "Web3",
  "Agritech",
  "EdTech",
  "Supply Chain",
  "Government Projects",
];

const competencies = [
  "Product Strategy",
  "Product Discovery",
  "Roadmap Planning",
  "Agile & Scrum",
  "User Story Writing",
  "PRD / BRD",
  "Sprint Planning",
  "Stakeholder Management",
  "Market Research",
  "Product Analytics",
  "Customer Research",
  "Go-To-Market Strategy",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Transforming Ideas Into
            <span className="text-cyan-400"> Successful Products</span>
          </h2>

          <p className="max-w-4xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Senior Product Owner and Product Manager with over 15 years of
            experience building scalable digital products across SaaS,
            FinTech, Blockchain, Web3, Agritech and EdTech domains.
            Passionate about solving customer problems, defining product
            strategy, leading cross-functional teams and delivering products
            that create measurable business value.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            {
              number: "15+",
              label: "Years Experience",
            },
            {
              number: "8+",
              label: "Years as Product Owner",
            },
            {
              number: "30+",
              label: "Products Delivered",
            },
            {
              number: "100%",
              label: "Agile Delivery",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaBullseye className="text-cyan-400" />
            Industry Expertise
          </h3>

          <div className="flex flex-wrap gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-5 py-3 rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-3xl font-bold mb-8">
            Core Competencies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {competencies.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5"
              >
                <FaCheckCircle
                  size={22}
                  className="text-cyan-400"
                />

                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}