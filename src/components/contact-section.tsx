"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-orange-800/10 via-white to-white dark:from-zinc-800 dark:via-transparent dark:to-black" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center px-4 py-20 text-center"
      >
        {/* Small Label */}
        <span className="mb-5 flex rounded-full border px-4 py-1 text-sm text-zinc-400 dark:border-white/10">
          Contact
        </span>

        {/* Main Heading */}
        <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-2xl lg:text-4xl">
          <span className="text-zinc-500">Let’s make an impact </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-md text-lg text-zinc-400">
          Ready to create something awesome together?
        </p>

        {/* CTA Button */}
        <Link href="https://www.calendly.com" target="blank">
          <button className="group mb-8 flex items-center gap-2 rounded-full border px-6 py-3 text-zinc-400 hover:bg-white/20 dark:border-white/10 dark:bg-transparent dark:hover:bg-white">
            Let's talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
