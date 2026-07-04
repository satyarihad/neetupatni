"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaBriefcase,
  FaChartBar,
  FaProjectDiagram,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Product Management",
    icon: <FaBullseye size={32} />,
    color: "text-cyan-400",
    skills: [
      "Product Vision",
      "Roadmap Planning",
      "Product Lifecycle",
      "Go-To-Market Strategy",
      "Market Research",
      "Competitive Analysis",
      "A/B Testing",
      "Product Metrics",
      "User Journey Mapping",
      "Google Analytics",
    ],
  },
  {
    title: "Agile & Delivery",
    icon: <FaProjectDiagram size={32} />,
    color: "text-emerald-400",
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Sprint Planning",
      "Release Planning",
      "Backlog Grooming",
      "Stakeholder Alignment",
      "Cross Functional Leadership",
    ],
  },
  {
    title: "Product Artifacts",
    icon: <FaBriefcase size={32} />,
    color: "text-orange-400",
    skills: [
      "BRD",
      "PRD",
      "SOW",
      "User Stories",
      "Acceptance Criteria",
      "Wireframes",
      "Business Flow Diagrams",
      "UAT Planning",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaDatabase size={32} />,
    color: "text-pink-400",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Miro",
      "Mermaid",
      "REST APIs",
      "Webhooks",
      "Azure",
    ],
  },
];

const expertise = [
  { name: "Product Strategy", value: 95 },
  { name: "Roadmap Planning", value: 95 },
  { name: "Stakeholder Management", value: 92 },
  { name: "Product Discovery", value: 90 },
  { name: "Agile & Scrum", value: 96 },
  { name: "Analytics", value: 88 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Skills &
            <span className="text-cyan-400"> Technologies</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
            A combination of strategic thinking, Agile leadership,
            customer discovery and modern product management
            tools that help transform ideas into successful products.
          </p>

        </motion.div>

        {/* Skill Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className={category.color}>
                  {category.icon}
                </div>

                <h3 className="text-2xl font-semibold">
                  {category.title}
                </h3>

              </div>

              <div className="grid grid-cols-2 gap-4">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-3 bg-slate-900 rounded-xl p-3"
                  >

                    <FaCheckCircle
                      size={18}
                      className={category.color}
                    />

                    <span className="text-gray-300 text-sm">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Professional Expertise */}

        <div className="mt-24">

          <div className="flex items-center gap-3 mb-10">

            <FaChartBar
              size={34}
              className="text-cyan-400"
            />

            <h2 className="text-4xl font-bold">
              Professional Expertise
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {expertise.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >

                <div className="flex justify-between mb-2">

                  <span className="font-medium">
                    {item.name}
                  </span>

                  <span className="text-cyan-400">
                    {item.value}%
                  </span>

                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.value}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="bg-cyan-400 h-3 rounded-full"
                  />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}