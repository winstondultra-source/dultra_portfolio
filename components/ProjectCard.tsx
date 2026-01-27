interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  badge: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  badge,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2"></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{category}</p>
          </div>
          <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
            {badge}
          </span>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
