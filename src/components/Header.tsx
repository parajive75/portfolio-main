"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed z-50 w-full pt-6 transition-all duration-300 ${
        scrolled ? "hidden" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="text-2xl font-bold">
              <img src="/logo.png" alt="logomark" width="40" height="40" />
            </Link>
          </motion.div>

          <div className="hidden items-center space-x-8 rounded-full bg-white/90 px-5 py-1 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur md:flex dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="py-2"
              >
                <Link
                  href={item.path}
                  className={`py-2 text-gray-600 transition-colors hover:text-lime-700 dark:text-gray-300 dark:hover:text-white ${
                    pathname === item.path
                      ? "font-semibold text-lime-800 dark:text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:flex">
            <ThemeSwitch />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 md:hidden dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        {/* Mobile  Menu*/}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {[
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ x: 10 }}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                    pathname === item.path
                      ? "font-semibold text-gray-900 dark:text-white"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="px-3 py-2">
              <ThemeSwitch />
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
