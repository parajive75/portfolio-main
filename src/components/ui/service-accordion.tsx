"use client";

import { useState } from "react";
import {
  SendToBack,
  Ratio,
  Podcast,
  Shapes,
  FileChartPie,
  Play,
} from "lucide-react";
import { AccordionItem } from "./accordion-item";

const services = [
  {
    icon: SendToBack,
    title: "Product strategy & Research",
    content:
      "I have had the chance to work on innovative product strategies and make these products more dynamic and engaging. Uncovering user needs through research and analysis, translating insights into actionable opportunities.",
    skills:
      "A/B testing, Agile Methodologies, Data Analysis, Information Architecture, Performance Metrics Analysis, Prioritization, Product Lifecycle Management, Roadmapping, Technical Writing",
  },
  {
    icon: Ratio,
    title: "Experience design",
    content:
      "Crafting intuitive digital experiences through user-centered approaches and design systems. Whether it's for web, mobile, or software applications, I strive to create interfaces that not only look great but also function seamlessly.",
    skills:
      "Data visualization, Personas, Prototyping, User Experience, User Interface Design, User Interviews, User Research, Wireframing, Usability Testing",
  },

  {
    icon: Shapes,
    title: "Visual Design",
    content:
      " With a strong foundation in visual design, I create compelling brand identities and interfaces that prioritize clear communication & brand consistency, for enhanced usability.",
    skills:
      "Brand identity, Custom illustration, Design Systems, Iconography, Logo design, Packaging design, Typography, Web & Mobile design",
  },

  {
    icon: FileChartPie,
    title: "Marketing",
    content:
      " Developing compelling marketing strategies to drive brand awareness and customer engagement. With my background in marketing & management, it's always a pleasure !",
    skills:
      "Benchmarking, Brand Strategy, Content Marketing, Customer Relationship Management,  Digital Marketing, Market Research, Micro/Macro Environment Analysis",
  },
  {
    icon: Podcast,
    title: "Soft skills",
    content:
      "My soft skills complement my technical expertise, enabling me to collaborate effectively across teams, manage time efficiently, and adapt to changing project needs.",
    skills:
      "Adaptability, Assertiveness, Cross-functional Collaboration, Design Thinking, Empathy, Negotiation, Time & Stakeholder Management",
  },
];

export function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl">
      {services.map((service, index) => (
        <AccordionItem
          key={index}
          service={service}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
