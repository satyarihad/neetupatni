"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
    title: "Certified Scrum Product Owner (CSPO)",
    organization: "Scrum Alliance",
    year: "2024",
    icon: <Award size={42} />,
    color: "from-cyan-500 to-blue-600",
    description:
      "Professional certification demonstrating expertise in Product Ownership, Agile Product Management, Product Vision, Roadmap Planning and Customer Value Delivery.",
    skills: [
      "Product Vision",
      "Product Backlog",
      "Roadmap",
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
      "Professional certification validating Scrum practices, Agile coaching, Sprint Planning and high-performing team collaboration.",
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
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional
            <span className="text-cyan-400">
              {" "}Credentials
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Industry-recognized certifications demonstrating expertise
            in Agile Product Management, Scrum and Product Leadership.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
            >

              {/* Header */}

              <div
                className={`bg-gradient-to-r ${cert.color} p-8`}
              >
                <div className="flex justify-between items-center">

                  <div>

                    {cert.icon}

                  </div>

                  <BadgeCheck size={42} />

                </div>

              </div>

              {/* Body */}

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 mt-2 text-lg">
                  {cert.organization}
                </p>

                <div className="flex items-center gap-2 mt-5 text-gray-400">

                  <Calendar size={18} />

                  {cert.year}

                </div>

                <p className="mt-6 text-gray-400 leading-7">
                  {cert.description}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {cert.skills.map((skill) => (

                    <span
                      key={skill}
                      className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-12 text-center"
        >
          <Award
            size={60}
            className="mx-auto mb-6"
          />

          <h3 className="text-3xl font-bold">
            Continuous Learning
          </h3>

          <p className="mt-5 text-lg max-w-3xl mx-auto leading-8">
            I continuously invest in learning modern Product
            Management practices, Agile methodologies,
            AI-powered products, Blockchain technologies
            and customer-centric innovation to deliver
            high-impact digital experiences.
          </p>

        </motion.div>

      </div>
    </section>
  );
}