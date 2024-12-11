"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const texts = [" Engineer", " Designer", " Manager"];
const variants = {
  enter: () => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

export default function HeroSection() {
  const text = "Transforming Concepts into Engaging User Journeys".split(" ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <section className="relative flex w-full items-center justify-center bg-white dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lime-800/10 via-white to-white dark:from-zinc-800 dark:via-transparent dark:to-black" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-4 py-20 text-center">
          {/* Profile Section */}
          <div className="relative mb-12">
            <div className="relative">
              <Image
                src="/profile.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full ring-4 ring-neutral-600/10 dark:ring-white/10 rotate-45"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg border shadow-grid">
                <div className="flex gap-2 whitespace-nowrap rounded-md bg-white px-5 py-1 font-medium text-black">
                  Malika Cissé
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-16 -mt-6 mb-5 max-w-screen-xl items-center justify-center text-sm font-medium">
            <span className="px-1">Product</span>
            <AnimatePresence>
              <motion.span
                style={{ position: "absolute" }}
                variants={variants}
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 100 },
                  opacity: { duration: 0.5 },
                }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Main Content */}
          <h1 className="mb-8 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {text.map((el, i) => (
              <motion.span
                className="dark:text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-gray-400 md:text-xl">
            I am a digital polythinker who likes to design, build and help
            foster growth. Constantly evolving and driven by lifelong learning,
            i have the desire to help startups and brands to craft expressive
            and engaging solutions.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/projects">
              <motion.button
                className="rounded-full bg-orange-600 px-6 py-3.5 font-medium text-white transition-opacity hover:bg-orange-700 hover:ring-1 hover:ring-fuchsia-500"
                whileTap={{ scale: 0.95 }}
              >
                Explore my work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="rounded-full border px-8 py-3 font-medium transition-colors hover:bg-slate-500/10 dark:hover:bg-gray-950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
