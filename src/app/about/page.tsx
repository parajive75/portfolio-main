"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FileDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ServiceAccordion } from "../../components/ui/service-accordion";
import { div } from "framer-motion/client";

const careers = [
  {
    avatar: "/logo.png",
    title: "Product Manager & Designer",
    period: "Oct 2022 - Now",
    description:
      "Now I design user-centric products that align with client visions. As a freelance product manager & designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.",
  },
  {
    avatar: "/subclic.png",

    title: "Product & Front End at Subclic",
    period: "May 2021 - Oct 2022",
    description:
      "Subclic is a SaaS that simplifies the management of administrative procedures in the construction industry. As a web developer, digital strategist and product manager, I held a multi-skilled position at Subclic. I implemented a communication strategy on the company's social networks, which helped increase the number of followers and engagement. I developed the frontend of the company's web application. I worked on the development of new product features and UX research, to improve the platform as a whole.",
  },
  {
    avatar:
      "https://cdn.prod.website-files.com/6055bfb0e78764e755d62b69/63b54b37cc99269fe0c740d4_202212_Logomark_Tchek_green.webp",

    title: "Product Owner at Tchek",
    period: "Dec 2019 - Sept 2020",
    description:
      "Tchek is the European leader in AI-powered scanner technology designed for the automotive industry. My role as Product Owner enabled me to play an active part in the transformation of customers, serving as a link between the business and technical teams to steer the implementation of pilot projects. I was responsible for identifying and prioritizing business and technical requirements & communicating our product vision clearly.",
  },
  {
    avatar:
      "https://d1l8km4g5s76x5.cloudfront.net/Production/exb_doc/2008/9482/thumb_2008_9482_9362_1388.png/fit-in/300x300",

    title: "Market & Export Associate at ExtenC",
    period: "Jul 2018 - June 2019",
    description:
      "Development lever for the Casino Group internationally, ExtenC contributes to the growth and implementation strategy of the Group's brands. My mission led me to define and implement new marketing offers, such as promotional operations and in-store events. I carried out market analysis and research into e-commerce potential and international expansion. I periodically updated and communicated label news to customers.",
  },
];

const schools = [
  {
    logo: "https://newsroom.ionis-group.com/wp-content/uploads/2022/12/EPITECH_DIGITAL_SCHOOL_LOGO_QUADRI.png",
    diploma: "MsC Management of Information Systems",
    school: "EPITECH, Marseille ,France",
    year: "2019 – 2022",
    description:
      " I gained comprehensive knowledge in web & product design, focusing on innovative digital solutions, user experience, and project management. Enhanced skills through real-world project based challenges & case studies.",
  },
  {
    logo: "https://www.hub-bridgeafrica.co/sites/default/files/styles/org_logo/public/2022-11/kbs-logo.png?itok=dx-NAK1I",
    diploma: "MsC in International Business",
    school: "Kedge Business School, Marseille, France",
    year: "2016 – 2019",
    description:
      "In the continuation of my curriculum in Business and Marketing, I joined the masters of science program at Kedge in International Business. I learned from a plethora of qualified teachers and experiences.",
  },
  {
    logo: "https://gopresidents.com/images/logos/site/site.png",
    diploma: "BA in Business Administration",
    school: "Washington & Jefferson College, Washington, USA",
    year: "2015 – 2016",
    description:
      " My exchange year as part of my program at idrac, i learned from one of the best schools in Pennsylvania, my major was Marketing and my minor was Psychology - this combo opened my vision about Marketing .",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/IDRAC_Business_School.png",
    diploma: "Bachelor in Design",
    school: "IDRAC Business School, Toulouse, France",
    year: "2013 – 2016",
    description:
      "At IDRAC, i dived into the world of marketing and management, learning from professors that were active business owners and speakers - expanding my knowledge tremendously.",
  },
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1.25, 1]);
  const opacity = useTransform(scrollY, [0, 500], [0.9, 0.6]);
  const handleOpenCV = () => {
    window.open("/CV_Malika_Cisse.pdf", "_blank");
  };

  return (
    <div className="min-h-screen">
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10 max-w-4xl lg:ml-40"
          >
            <div className="text-xl lg:text-4xl text-balance font-semibold">
              Every project starts with a story – {" "}
              <span className="text-gray-500">
                yours, mine, or someone else's – and that's where the magic
                begins
              </span>
            </div>
          </motion.div>

          {/* Profile picture */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border dark:border-zinc-600"
          >
            <motion.div
              className="h-full w-full"
              style={{
                scale,
                transformPerspective: "1200px",
              }}
            >
              <img
                src="/about.png"
                alt="Portrait"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* About section */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16 mt-12 flex flex-col space-y-5"
          >
            <div className="flex flex-col items-start gap-6">
              <h4 className="inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[14px] font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
                About me
              </h4>
              <h2 className="text-2xl font-medium lg:text-4xl dark:text-gray-400">
                I am a Marketer Turned Into a{" "}
                <span className="text-orange-600 dark:text-white">
                  Product Specialist
                </span>
              </h2>
            </div>

            <div className="flex-col space-y-5 text-justify">
              <p>
                Fueled by my interest for the world around me, my journey
                started in international business, where I learned the ropes of
                marketing, strategy and teamwork. While exploring new industries
                and learning from diverse backgrounds to continually expand my
                knowledge, I was led to the dynamic world of information
                technology, an industry that profoundly impacts both business
                and society.
              </p>

              <p>
                I'm passionate about my work because I believe that good design
                can make a real difference in the world — It can help businesses
                attract new customers, build stronger relationships, and create
                a more positive brand image. I love the challenge of taking
                someone's vision and turning it into a reality.
              </p>
              <p>
                Beyond my technical skills, I’ve developed strong leadership and
                multitasking abilities as a business owner. I've learned how to
                juggle projects and lead teams. I blend my passion for visual
                design with a deep understanding of human needs, functionality,
                and innovation. I'm excited to bring my energy and skills to a
                team looking for help. I am confident in my ability to bring
                passion and value to any project.
              </p>
            </div>
          </motion.div>

          {/* Services section */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16 mt-12 flex flex-col space-y-5"
          >
            <div className="flex flex-col items-start gap-6">
              <h4 className="ring-offset-background inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[14px] font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
                {" "}
                Services
              </h4>
              <h1 className="text-2xl font-medium lg:text-4xl dark:text-gray-400">
                Things I'm{" "}
                <span className="text-orange-600 dark:text-white">
                  {" "}
                  Good At
                </span>
              </h1>
              <div className="flex-col space-y-5 text-pretty">
                <p>
                  As a creative technologist, I craft intuitive digital
                  experiences using a diverse set of tools and languages. With a
                  strong foundation in both design and development, I bring a
                  unique perspective to every project and am constantly learning
                  and evolving to stay up-to-date with the latest industry
                  trends. I am focused and driven by a desire to create and
                  learn. It reflects in my personality and skillset.
                </p>
              </div>
            </div>

            <div>
              <ServiceAccordion />
            </div>
          </motion.div>

          {/* Career section */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16 mt-12"
          >
            <motion.div className="py-4">
              <h4 className="ring-offset-background inline-flex h-9 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm shadow-black/5">
                {" "}
                Career
              </h4>
              <div className="flex flex-row items-center justify-between gap-6 lg:flex-row">
                {" "}
                <h1 className="py-6 text-2xl font-medium lg:text-4xl dark:text-gray-400">
                  This Is{" "}
                  <span className="text-orange-600 dark:text-white">
                    My Career
                  </span>
                </h1>
                <button
                  onClick={handleOpenCV}
                  className="group relative rounded-xl border p-3 transition-colors dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white"
                  title="Download my resume"
                >
                  <FileDown size={24} strokeWidth={1.5} />
                </button>
              </div>
              <div className="py-3">
                <p>
                  Evolving into different types of companies and environments
                  boosts one's motivation to do even more and even better. Being
                  apart of both the digital & mercantile world gives my profile
                  a duality needed in today's world.
                </p>
              </div>

              {/* Career Timeline */}
              <div className="space-y-4">
                {careers.map((career, index) => (
                  <div
                    key={index}
                    className="border-b border-black py-10 dark:border-slate-50"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <img
                        src={career.avatar}
                        alt="avatar"
                        width={45}
                        height={45}
                        className="rounded-xl object-cover"
                      />
                      <div className="lg:w-1/3">
                        <h3 className="mb-2 text-xl font-semibold">
                          {career.title}
                        </h3>
                        <p className="text-base dark:text-white/60">
                          {career.period}
                        </p>
                      </div>
                      <p className="leading-relaxed lg:w-2/3 dark:text-white/80">
                        {career.description}{" "}
                        <span>
                          <Link
                            href="/projects/#experiences"
                            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                          >
                            <span className="inline-flex transform items-center gap-1 transition duration-200 ease-in-out hover:translate-x-1">
                              Learn more <ChevronRight size={16} />
                            </span>
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16 mt-12 py-4"
          >
            <div className="">
              <h4 className="inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[14px] font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
                {" "}
                Education
              </h4>
              <h1 className="py-6 text-2xl font-medium lg:text-4xl dark:text-gray-400">
                And{" "}
                <span className="text-orange-600 dark:text-white">
                  My Curriulum
                </span>
              </h1>
            </div>
            <p>
              Influenced by the principles of geopolitics and international
              commerce, i studied international marketing, management and
              business administration for the most part of my curriculum.  I
              then joined my master in a work study mode after wanting to expand
              my digital baggage. My goal was to be able to conceptualize
              products from the ideation to their development; and also
              contribute to their international expansion if necessary.
            </p>
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
                {schools.map((school, index) => (
                  <div
                    key={index}
                    className="flex-col justify-between gap-2 rounded-2xl border border-gray-200 bg-gray-50/10 p-6 dark:border-zinc-500"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-600 dark:bg-white/90">
                      <img
                        src={school.logo}
                        alt={school.school}
                        className="object-center"
                      />
                    </div>
                    <div className="my-4 flex-col">
                      <h3 className="my-1 text-sm text-gray-400 dark:text-white">
                        {school.diploma}
                      </h3>
                      <h4 className="my-1 text-base font-medium text-gray-900 dark:text-white">
                        {school.school}
                      </h4>
                      <p className="my-1 text-sm text-gray-400 dark:text-white">
                        {school.year}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-white">
                        {school.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-16"
          >
            <div className="flex flex-col items-start gap-6">
              <h4 className="inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[14px] font-medium shadow-sm shadow-black/5 dark:border-zinc-600 dark:bg-zinc-900">
                {" "}
                Interests
              </h4>
              <h1 className="text-2xl font-medium lg:text-4xl dark:text-gray-400">
                Things I{" "}
                <span className="text-orange-600 dark:text-white"> Love</span>
              </h1>
            </div>
            <div className="flex-col space-y-5 text-justify">
              <p className="py-6">
                As a creative at heart, I find inspiration in a diverse range of
                passions. From the artistry of cooking to the architectural
                marvels of the world, I'm constantly seeking new ways to blend
                aesthetics and functionality. My passion for architecture and
                travel inspires me to design products that are both functional
                and beautiful. By understanding the nuances of human behavior
                and the power of design, I strive to create products that
                resonate with people on a deeper level.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* Column #1 */}
              <div className="grid gap-4">
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 01"
                  />
                </div>
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 02"
                  />
                </div>
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1728891483267-ac962351779c?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 03"
                  />
                </div>
              </div>
              {/* Column #2  */}
              <div className="grid gap-4">
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1588786849373-642245e7bd15?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Painting"
                  />
                </div>
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1690975719788-c0cf5b5692de?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 05"
                  />
                </div>
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1583873743670-6d60e445a7e2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 06"
                  />
                </div>
              </div>
              {/* Column #3  */}
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-full w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1528046652967-217fde4a4529?q=80&w=3241&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 07"
                  />
                </div>
                <div>
                  <img
                    className="h-full w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1513746347121-4cfd77c7dc37?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 08"
                  />
                </div>
                <div>
                  <img
                    className="h-full w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1466220549276-aef9ce186540?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 09"
                  />
                </div>
              </div>
              {/* Column #4 */}
              <div className="grid gap-4">
                <div>
                  <img
                    className="w-full rounded-xl shadow"
                    src="https://images.unsplash.com/photo-1604882737206-8a000c03d8fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 10"
                  />
                </div>
                <img
                  className="w-full rounded-xl shadow"
                  src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image 11"
                />
                <img
                  className="w-full rounded-xl shadow"
                  src="https://images.unsplash.com/photo-1525453689870-bfab0d1af50d?q=80&w=2901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image 12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
