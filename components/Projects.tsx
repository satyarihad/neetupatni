"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  Globe,
  Database,
  Wallet,
  Ticket,
  Tractor,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "Carbon Credit Marketplace",
    company: "Hashgraph Group",
    icon: <Wallet size={34} />,
    color: "from-cyan-500 to-blue-600",
    description:
      "Government-backed blockchain marketplace enabling carbon credit issuance, trading and lifecycle management.",
    technologies: [
      "Hedera",
      "Blockchain",
      "Azure",
      "IPFS",
      "Smart Contracts",
    ],
    achievements: [
      "Defined KYB & AML workflows",
      "Designed Wallet Integration",
      "Marketplace Trading",
      "Carbon Credit Lifecycle",
    ],
  },

  {
    title: "Supply Chain Traceability",
    company: "Hashgraph Group",
    icon: <Globe size={34} />,
    color: "from-green-500 to-emerald-600",
    description:
      "Web3 supply chain platform providing end-to-end traceability using decentralized technologies.",
    technologies: [
      "Web3",
      "Hedera",
      "Azure",
      "IPFS",
      "DLT",
    ],
    achievements: [
      "Delivered MVP in 4 Months",
      "Product Strategy",
      "Roadmap Planning",
      "Stakeholder Management",
    ],
  },

  {
    title: "B2B SaaS Compliance Platform",
    company: "Product Consultant",
    icon: <Shield size={34} />,
    color: "from-orange-500 to-red-500",
    description:
      "Compliance automation platform helping food manufacturers meet FDA labeling regulations.",
    technologies: [
      "SaaS",
      "ERP",
      "Role Based Access",
      "FDA",
      "Automation",
    ],
    achievements: [
      "5K+ Users",
      "GTM Strategy",
      "Customer Discovery",
      "100% Manual Effort Eliminated",
    ],
  },

  {
    title: "NFT Marketplace",
    company: "Metaverse Blockchain",
    icon: <Database size={34} />,
    color: "from-purple-500 to-pink-600",
    description:
      "Digital collectibles ecosystem with NFT minting, AI-powered content generation and engagement features.",
    technologies: [
      "NFT",
      "AI",
      "Blockchain",
      "GA4",
      "Marketplace",
    ],
    achievements: [
      "10K Users",
      "AI Chatbot",
      "Image Generation",
      "15% Higher Engagement",
    ],
  },

  {
    title: "QR Ticketing Platform",
    company: "Metaverse Blockchain",
    icon: <Ticket size={34} />,
    color: "from-blue-500 to-indigo-600",
    description:
      "Real-time event ticketing system supporting QR validation, attendee tracking and analytics.",
    technologies: [
      "QR",
      "Analytics",
      "Attendance",
      "Dashboard",
    ],
    achievements: [
      "Real-time Check-In",
      "Access Control",
      "Event Analytics",
      "Scalable Architecture",
    ],
  },

  {
    title: "Agritech Procurement Platform",
    company: "Ergos",
    icon: <Tractor size={34} />,
    color: "from-lime-500 to-green-600",
    description:
      "Digital procurement platform for grain buying, warehouse management, lending and inventory.",
    technologies: [
      "Agritech",
      "NBFC APIs",
      "Warehouse",
      "IoT",
    ],
    achievements: [
      "Loan Approval in 2 Hours",
      "Warehouse Automation",
      "Roadmap Ownership",
      "Investor Demos",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured
            <span className="text-cyan-400"> Products</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
            Some of the enterprise products and platforms I have led from
            strategy and discovery to successful delivery.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl"
            >

              {/* Header */}

              <div
                className={`bg-gradient-to-r ${project.color} p-6 flex justify-between items-center`}
              >
                <div>{project.icon}</div>

                <ArrowUpRight />
              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mt-1">
                  {project.company}
                </p>

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Technology */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 px-3 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Achievements */}

                <div className="mt-8 space-y-3">

                  {project.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-cyan-400 mt-1"
                      />

                      <span className="text-gray-300">
                        {achievement}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}