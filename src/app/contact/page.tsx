"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Figma, Mail, Github } from "lucide-react";

import Image from "next/image";
import { useState } from "react";
export default function ContactPage() {
  const [copied, setCopiedId] = useState<string>();

  return (
    <div className="min-h-screen">
      <section className="bg-white py-20 dark:bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 pt-20 text-center"
          >
            <div className="ring-offset-background mb-4 inline-flex h-9 items-center justify-center rounded-full border px-3 py-2 text-sm font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
              <span className="relative inline-flex h-2 w-2 animate-pulse rounded-full bg-teal-800"></span>
              <h4 className="px-2"> Open for work</h4>
            </div>

            <h2 className="mb-5 text-4xl font-semibold text-orange-600">
              Have a project in mind?{" "}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              I’m always eager to collaborate and bring fresh perspectives to
              the table, constantly refining my skills through hands-on
              experience, ongoing learning, and active participation. I'm
              currently working on projects as an independent but i wouldn't
              mind joining a meaningful project long term, I’d love to connect
              and discuss how I can contribute to your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-800 dark:bg-white/5 dark:text-white"
                    placeholder="Jonh"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-800 dark:bg-white/5 dark:text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-800 dark:bg-white/5 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-800 dark:bg-white/5 dark:text-white"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full rounded-lg border bg-white px-8 py-3 font-medium text-gray-600 transition-opacity hover:opacity-90 dark:border-gray-800 dark:bg-white/5 dark:text-gray-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto mt-3 py-6 sm:py-4">
                <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <div className="col-span-4 flex h-auto flex-col sm:col-span-4 md:col-span-4 md:h-full">
                    <a
                      href=""
                      className="group relative flex flex-grow flex-col overflow-hidden rounded-lg border px-4 pb-4 pt-40 shadow-sm shadow-black/5 dark:border-gray-800"
                    >
                      <div>
                        <Image
                          fill={true}
                          src="/map-light.jpg"
                          alt=""
                          className="absolute inset-0 block object-cover transition-transform duration-500 ease-in-out dark:hidden"
                        />
                      </div>
                      <div>
                        <Image
                          fill={true}
                          src="/map-dark.jpg"
                          alt=""
                          className="absolute inset-0 hidden object-cover transition-transform duration-500 ease-in-out dark:block"
                        />
                      </div>

                      <div className="xs:text-xl absolute bottom-0 left-0 z-10 p-4 text-2xl md:text-3xl dark:text-white">
                        <div className="rounded-[8px] bg-white/20 px-2 text-[14px] shadow-sm backdrop-blur-[20px]">
                          Marseille, FR
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid w-full auto-rows-[76px] grid-cols-4 gap-3 py-4 xl:overflow-y-auto">
                <div className="container col-span-2 row-span-2 flex flex-col justify-start rounded-lg border bg-white p-2 shadow-grid transition-colors duration-75 ease-in-out hover:bg-neutral-50 sm:p-4 md:col-span-1 md:p-2 dark:border-gray-800 dark:bg-neutral-900 hover:dark:bg-neutral-800">
                  <div>
                    <div className="flex transform-none items-center justify-between opacity-100">
                      <div className="bg-stone-50; flex h-10 w-10 shrink-0 transform-none items-center justify-center rounded-lg border opacity-100 shadow-grid dark:border-gray-800">
                        <Mail size={25} strokeWidth={1}></Mail>
                      </div>
                    </div>

                    <div className="mt-3 transform-none opacity-100">
                      <div className="line-clamp-1 transform-none opacity-100 lg:text-sm">
                        Email
                      </div>
                      <div className="mt-1 transform-none text-xs text-neutral-500 opacity-100">
                        <button
                          className="text-[11.5px]"
                          onClick={async () => {
                            // Writing text with writeText

                            await navigator.clipboard.writeText(
                              "malika.cisse@proton.me",
                            );

                            setCopiedId("write-text");
                          }}
                        >
                          {copied === "write-text"
                            ? "📎 Copied"
                            : "malika.cisse@proton.me"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container col-span-2 row-span-2 flex flex-col justify-start rounded-lg border bg-white p-2 shadow-grid transition-colors duration-75 ease-in-out hover:bg-neutral-50 sm:p-4 md:col-span-1 md:p-2 dark:border-gray-800 dark:bg-neutral-900 hover:dark:bg-neutral-800">
                  <Link
                    href="https://www.linkedin.com/in/malika-cisse"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <div className="flex transform-none items-center justify-between opacity-100">
                      <div className="bg-stone-50; flex h-10 w-10 shrink-0 transform-none items-center justify-center rounded-lg border opacity-100 shadow-grid dark:border-gray-800">
                        <Linkedin size={25} strokeWidth={1}></Linkedin>
                      </div>
                    </div>
                    <div className="mt-3 transform-none opacity-100">
                      <div className="line-clamp-1 transform-none opacity-100 lg:text-sm">
                        LinkedIn
                      </div>
                      <div className="mt-1 transform-none text-xs text-neutral-500 opacity-100">
                        @malika-cisse
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container col-span-2 row-span-2 flex flex-col justify-start rounded-lg border bg-white p-2 shadow-grid transition-colors duration-75 ease-in-out hover:bg-neutral-50 sm:p-4 md:col-span-1 md:p-2 dark:border-gray-800 dark:bg-neutral-900 hover:dark:bg-neutral-800">
                  <Link
                    href="https://www.figma.com/@mlk_cse"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <div className="flex transform-none items-center justify-between opacity-100">
                      <div className="bg-stone-50; flex h-10 w-10 shrink-0 transform-none items-center justify-center rounded-lg border opacity-100 shadow-grid dark:border-gray-800">
                        <Figma size={25} strokeWidth={1}></Figma>
                      </div>
                    </div>
                    <div className="mt-3 transform-none opacity-100">
                      <div className="line-clamp-1 transform-none opacity-100 lg:text-sm">
                        Figma
                      </div>
                      <div className="mt-1 transform-none text-xs text-neutral-500 opacity-100">
                        @mlk_cse
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container col-span-2 row-span-2 flex flex-col justify-start rounded-lg border bg-white p-2 shadow-grid transition-colors duration-75 ease-in-out hover:bg-neutral-50 sm:p-4 md:col-span-1 md:p-2 dark:border-gray-800 dark:bg-neutral-900 hover:dark:bg-neutral-800">
                  <Link
                    href="https://www.github.com"
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <div className="flex transform-none items-center justify-between opacity-100">
                      <div className="bg-stone-50; flex h-10 w-10 shrink-0 transform-none items-center justify-center rounded-lg border opacity-100 shadow-grid dark:border-gray-800">
                        <Github size={25} strokeWidth={1}></Github>
                      </div>
                    </div>
                    <div className="mt-3 transform-none opacity-100">
                      <div className="line-clamp-1 transform-none opacity-100 lg:text-sm">
                        Github
                      </div>
                      <div className="mt-1 transform-none text-xs text-neutral-500 opacity-100">
                        @mlk_cse
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
