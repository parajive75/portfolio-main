"use client";

import { motion } from "framer-motion";
import { Code, Server, Palette, ChevronRight } from "lucide-react";
import Link from "next/link";

const skills = [
  {
    name: "Frontend",
    icon: Code,
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    name: "Backend",
    icon: Server,
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    name: "Design",
    icon: Palette,
    description: "Figma, Adobe XD, UI/UX Principles",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-black/50">
      <div className="mx-auto max-w-2xl flex-col lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl mx-5 flex-col lg:max-w-7xl"
        >
          <span className="ring-offset-background mb-5 inline-flex h-9 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium text-zinc-400 shadow-sm shadow-black/5 dark:border-white/10">
            My profile
          </span>

          <h1 className="text-balance text-5xl font-semibold">
            A range of my abilities
          </h1>

          <p className="mt-5 inline-block justify-end font-medium text-gray-600 dark:text-gray-400">
            My experiences in business, marketing, and information technology
            have allowed to have a unique blend of technical and creative
            abilities, resulting in crisp product experiences.{" "}
            <span>
              <Link
                href="/about"
                className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span className="inline-flex transform items-center gap-1 transition duration-200 ease-in-out hover:translate-x-1">
                  Learn more about me <ChevronRight size={16} />
                </span>
              </Link>
            </span>
          </p>
        </motion.div>
      </div>
      <div className="mx-auto px-6 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mx-auto">
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-8 ">
              <div className="relative lg:col-span-3">
                <div className="absolute inset-px rounded-lg lg:rounded-tr-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                  <div className="">
                    <img
                      src="/softwares.png"
                      alt="soft"
                      className="block h-80 object-contain object-left lg:object-right dark:hidden"
                    />
                    <img
                      src="/softwares-dark.png"
                      alt="soft"
                      className="hidden h-80 object-cover object-left lg:object-right dark:block"
                    />
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-orange-600 dark:text-zinc-300">
                      Toolbox
                    </h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                      Softwares I work with
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                      Being proficient with project and roadmap management tools
                      grants me the ability to interpret user data into
                      actionnable opportunities.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem] dark:ring-zinc-600" />
              </div>

              <div className="relative lg:col-span-2">
                <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                  <img
                    alt=""
                    src="/bento.png"
                    className="h-80 object-cover object-center"
                  />
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-orange-600 dark:text-zinc-300">
                      Network
                    </h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                      I view myself as a Global citizen
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                      Having lived on 3 continents out of 5, I have a natural
                      inkling towards people & differents cultures.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] dark:ring-zinc-600" />
              </div>

              <div className="relative lg:col-span-3">
                <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                  <div>
                    <img
                      src="/techs.png"
                      alt="soft"
                      className="block h-80 w-full object-cover dark:hidden"
                    />
                    <img
                      src="/techs-dark.png"
                      alt="soft"
                      className="hidden h-80 w-full object-cover dark:block"
                    />
                  </div>

                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-orange-600 dark:text-zinc-300">
                      Stack
                    </h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                      Technologies I build with
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                      I have a deep and intuitive understanding of how the
                      interfaces of the best software products in the world are
                      designed. I enjoy solving problems with prototypes.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] dark:ring-zinc-600" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
