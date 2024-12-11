"use client";

import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  service: {
    icon: React.ElementType;
    title: string;
    content: string;
    skills: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export function AccordionItem({
  service,
  isActive,
  onClick,
}: AccordionItemProps) {
  const Icon = service.icon;

  return (
    <div className="group border-b border-gray-200">
      <button onClick={onClick} className="w-full text-left">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <Icon
              className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
              strokeWidth={1.5}
            />
            <span className="text-xl font-medium">{service.title}</span>
          </div>
          {isActive ? (
            <Minus className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-1">
            <p className="text-gray-600 dark:text-zinc-400">
              {service.content}
            </p>
            <p className="py-2 pb-6 text-gray-600 dark:text-zinc-400">
              {" "}
              <span className="font-medium text-gray-600 dark:text-white">
                Key skills:{" "}
              </span>
              {service.skills}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
