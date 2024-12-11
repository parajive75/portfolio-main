"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight,ArrowRight } from "lucide-react";



export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex-col"
        >
          <span className="ring-offset-background mb-5 inline-flex h-9 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium text-zinc-400 shadow-sm shadow-black/5 dark:border-white/10">
            Select work
          </span>

          <div className="grid grid-cols-1 lg:gap-28 md:grid-cols-2">
            <h1 className="text-balance text-5xl font-semibold">
              Concepts from my gray matter crate
            </h1>

            <p className="mt-5 inline-block justify-end font-medium text-gray-600 dark:text-gray-400">
              Here are a few projects that highlight my abilities. Committed to
              delivering exceptional results through dedication, and a
              commitment to crafting high-quality solutions.{" "}
              <span>
                <Link
                  href="/projects"
                  className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="inline-flex transform items-center gap-1 transition duration-200 ease-in-out hover:translate-x-1">
                    View more <ChevronRight size={16} />
                  </span>
                </Link>
              </span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 flex-col gap-10">
          <div>
            <Link href="/projects">
              <img
                src="/floowww.png"
                alt=""
                className="rounded-lg hover:scale-95"
              />
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <img
                src="/easyhealth.png"
                alt=""
                className="rounded-lg hover:scale-95"
              />
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <img
                src="/logispro.png"
                alt=""
                className="rounded-lg hover:scale-95"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
