"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";



export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h4 className="ring-offset-background mb-4 inline-flex h-9 items-center justify-center rounded-full border px-3 py-2 text-sm font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
              {" "}
              Portfolio
            </h4>
            <h2 className="mb-1 py-2 text-4xl font-semibold text-orange-600">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Having the chance to work on a broad range of projects, helped me
              leverage my technical expertise and business acumen to deliver
              innovative solutions across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              role="status"
              className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
            >
              <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
            >
              <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
            >
              <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
            >
              <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20" id="experiences">
        <h1>Experiences </h1>
        Dive a little ore into what i accopmlished during my career at subclic,
        tchek and others
      </section> */}
    </div>
  );
}
