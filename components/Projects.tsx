import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Abstract Digital Portraits',
      category: 'Digital Art',
      description:
        'A collection of abstract, stylized digital portraits exploring different color schemes, brush techniques, and textures. Demonstrates ability to experiment with traditional art styles while working digitally.',
      technologies: ['Adobe Photoshop', 'Procreate', 'Digital Tablet'],
      badge: 'What You Know',
    },
    {
      title: 'Animated Digital Art Series',
      category: 'Motion Graphics & Animation',
      description:
        'A series of animated digital artworks combining illustration skills with animation techniques to create subtle, looping visuals. Learned motion graphics, layering, and exporting animations for various platforms.',
      technologies: ['Adobe After Effects', 'Adobe Illustrator', 'Photoshop', 'Blender'],
      badge: 'What You Learned',
    },
    {
      title: 'Virtual Reality Art Gallery',
      category: 'VR Experience Design',
      description:
        'An immersive virtual reality art gallery showcasing interactive digital art. Combines digital art skills with cutting-edge VR technology to offer users a unique 3D space to experience art in new ways.',
      technologies: ['Unity 3D', 'Oculus Rift', 'HTC Vive', '3D Modeling', 'Blender', 'ZBrush'],
      badge: 'What You Aspire To',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          My journey of growth: What I know, what I learned, and what I aspire to create
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              badge={project.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
