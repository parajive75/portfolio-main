"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    image: "/placeholder.svg?height=600&width=400",
    techStack: ["OpenAI", "Hugging Face", "TensorFlow"],
  },
  {
    id: 2,
    category: "Productivity",
    title: "Enhance your productivity.",
    image:
      "https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Notion API", "Zapier", "Slack"],
  },
  {
    id: 3,
    category: "Product",
    title: "Launching Apple Vision.",
    image: "/placeholder.svg?height=600&width=400",
    techStack: ["ARKit", "Metal", "Swift"],
  },
  {
    id: 4,
    category: "Innovation",
    title: "The future of tech.",
    image: "/placeholder.svg?height=600&width=400",
    techStack: ["Blockchain", "IoT", "5G"],
  },
  {
    id: 5,
    category: "Sustainability",
    title: "Green tech solutions.",
    image: "/placeholder.svg?height=600&width=400",
    techStack: ["Solar", "Smart Grid", "EV Tech"],
  },
];

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 30}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-[40%] flex-shrink-0 px-2">
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <span className="mb-2 block text-xs font-medium text-white/90">
                        {slide.category}
                      </span>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {slide.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-white/20 px-2 py-1 text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="mt-auto text-2xl font-bold text-white">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="h-10 w-10 rounded-full bg-white text-gray-800 hover:bg-gray-100"
          onClick={previousSlide}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          className="h-10 w-10 rounded-full bg-white text-gray-800 hover:bg-gray-100"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  );
}
