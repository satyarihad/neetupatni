"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    company: "Hashgraph Group",
    location: "Switzerland (Remote)",
    role: "Senior Product Owner",
    duration: "May 2025 – Mar 2026",
    achievements: [
      "Led product strategy for a Web3 Supply Chain Traceability Platform.",
      "Launched MVP in just 4 months.",
      "Delivered Government-backed Carbon Credit Marketplace.",
      "Defined Smart Contract & Wallet workflows.",
    ],
  },
  {
    company: "Product Consultant",
    location: "Remote",
    role: "Senior Product Owner / Product Consultant",
    duration: "Aug 2024 – May 2025",
    achievements: [
      "Defined GTM strategy for B2B SaaS Compliance Platform.",
      "Achieved 5K+ users on launch.",
      "Reduced manual compliance effort through automation.",
      "Built ERP Integration roadmap.",
    ],
  },
  {
    company: "Metaverse Blockchain",
    location: "Gurgaon",
    role: "Senior Product Manager",
    duration: "May 2023 – Jun 2024",
    achievements: [
      "Led NFT Marketplace Product.",
      "Launched AI Chatbot & Image Generation.",
      "Designed QR Ticketing System.",
      "Improved engagement by 15%.",
    ],
  },
  {
    company: "Ergos Business Solutions",
    location: "Bengaluru",
    role: "Product Manager",
    duration: "Nov 2021 – Apr 2023",
    achievements: [
      "Built Agritech Procurement Platform.",
      "Integrated NBFC Loan APIs.",
      "Reduced loan approval time from 48 hrs to 2 hrs.",
      "Managed complete Product Roadmap.",
    ],
  },
  {
    company: "Antly Logistics",
    location: "Bengaluru",
    role: "Product Manager",
    duration: "Dec 2017 – Nov 2021",
    achievements: [
      "Launched SaaS School Management Platform.",
      "Added 100+ customer accounts every month.",
      "Improved client retention by 20%.",
      "Managed Agile Delivery Team.",
    ],
  },
  {
    company: "Carmatec IT Solutions",
    location: "Bengaluru",
    role: "Project Manager",
    duration: "Mar 2016 - Dec 2017",
    achievements: [
      "Managed 10+ simultaneous projects.",
      "Led 20+ member cross-functional teams.",
      "Reduced budget overruns by 30%.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
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
            Career Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional
            <span className="text-cyan-400"> Experience</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
            Over 15 years of experience delivering successful
            digital products across SaaS, FinTech,
            Blockchain, Agritech and Government sectors.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Vertical Line */}

          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-cyan-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex mb-14"
            >
              {/* Timeline Circle */}

              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 z-10">
                <FaBriefcase size={28} />
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:ml-10 flex-1 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-400 mt-2 text-xl">
                      {exp.company}
                    </p>
                  </div>

                  <div className="mt-5 lg:mt-0">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt size={18} />
                      {exp.duration}
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-gray-400">
                      <FaMapMarkerAlt size={18} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start"
                    >
                      <FaArrowRight
                        size={18}
                        className="text-cyan-400 mt-1"
                      />

                      <p className="text-gray-300 leading-7">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}