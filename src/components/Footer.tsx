"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Nfc, Dribbble } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full border-t border-gray-200 bg-gray-50/10 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-2xl px-8 py-4 lg:max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-4">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <img src="/logo.png" alt="logomark" width="40" height="40" />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="mr-5 flex items-baseline justify-end space-x-6 space-y-2">
              {["About", "Projects", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-8 py-4 lg:max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-4 pb-10">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-7 text-gray-600 dark:text-gray-400"
          >
            <span>© Malika Cissé · {currentYear} </span>
          </motion.div>
          {/* Social */}
          <div>
            <div className="mr-5 flex justify-end space-x-4">
              {[
                { Icon: Mail, href: "mailto:malika.cisse@proton.me" },
                { Icon: Github, href: "https://github.com" },
                { Icon: Dribbble, href: "https://dribbble.com" },
                { Icon: Nfc, href: "https://linkedin.com" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
