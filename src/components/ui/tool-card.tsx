"use client";

interface ToolCardProps {
  icon: any;
  name: string;
}

export function ToolCard({ icon, name }: ToolCardProps) {
  return (
    <div className="me-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 flex">
      <div className="relative h-5 w-5 flex-shrink-0">
        <img
          src={icon}
          alt={name}
          className="rounded-lg border object-contain"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="text-xs font-medium">{name}</h3>
      </div>
    </div>
  );
}
