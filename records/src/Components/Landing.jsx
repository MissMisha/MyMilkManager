import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center px-4 mt-20 mb-20 "
      >
        <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 max-w-3xl leading-tight">
          Keep every detail, perfectly organized.
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-l ">
          Smart, secure, and simple record-keeping for your daily operations.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#login" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition">
           <Link to="/signup"> Get Started</Link>
          </a>
          <a href="#features" className="text-indigo-600 font-semibold hover:underline">Learn More</a>
        </div>

        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800"
          >
            Why RecordManager?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureData.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Feature {...f} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call-To-Action */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-indigo-600 text-white text-center py-8"
      >
        <h3 className="text-2xl font-semibold">Ready to simplify your record-keeping?</h3>
        <a
          href="#signup"
          className="mt-4 inline-block bg-white text-indigo-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Sign Up Now
        </a>
      </motion.footer>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

const featureData = [
  {
    icon: "📋",
    title: "Easy Record Keeping",
    description: "Add, edit, and manage records with ease.",
  },
  {
    icon: "🔍",
    title: "Fast Search & Filters",
    description: "Quickly find what you're looking for.",
  },
  {
    icon: "📊",
    title: "Visual Summaries",
    description: "Understand your data with clean dashboards.",
  },
];
