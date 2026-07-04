"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

interface CertificationType {
  title: string;
  organization: string;
  year: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  skills: string[];
}

const certifications: CertificationType[] = [
  {
    title: "Certified Scrum Product Owner (CSPO)",
    organization: "Scrum Alliance",
    year: "2024",
    icon: <Award size={42} />,
    color: "from-cyan-500 to-blue-600",
    description:
      "Professional certification demonstrating expertise in Product Ownership, Agile Product Management, Product Vision, Roadmap Planning, Customer Value Delivery, and Agile product strategy.",
    skills: [
      "Product Vision",
      "Product Backlog",
      "Roadmap Planning",
      "Agile Leadership",
      "Stakeholder Management",
    ],
  },
  {
    title: "Certified Scrum Master (CSM)",
    organization: "Scrum Alliance",
    year: "2018",
    icon: <ShieldCheck size={42} />,
    color: "from-purple-500 to-pink-600",
    description:
      "Professional certification validating Scrum principles, Sprint Planning, Agile coaching, servant leadership, and high-performing cross-functional team collaboration.",
    skills: [
      "Scrum",
      "Sprint Planning",
      "Agile",
      "Team Leadership",
      "Release Planning",
    ],
  },
];

export default function Certification() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Professional
            <span className="text-cyan-400"> Credentials</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Industry-recognized certifications demonstrating expertise in
            Agile Product Management, Scrum Framework, Product Ownership,
            Leadership, and Customer Value Delivery.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${cert.color} p-8`}
              >
                <div className="flex items-center justify-between">
                  <div>{cert.icon}</div>

                  <BadgeCheck size={42} />
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {cert.title}
                </h3>

                <p className="mt-2 text-lg text-cyan-400">
                  {cert.organization}
                </p>

                <div className="mt-5 flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{cert.year}</span>
                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-12 text-center shadow-2xl"
        >
          <Award
            size={60}
            className="mx-auto mb-6"
          />

          <h3 className="text-3xl font-bold">
            Continuous Learning
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            I continuously invest in learning modern Product Management,
            Agile methodologies, AI-powered products, Blockchain
            technologies, Cloud Platforms, and customer-centric innovation
            to build scalable digital products that deliver measurable
            business value.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-10 rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View More Achievements
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}