export default function Learning() {
  const learningTopics = [
    {
      title: 'Augmented Reality (AR) Art',
      description: 'Creating interactive AR experiences for art installations and exhibitions',
    },
    {
      title: 'Advanced 3D Modeling',
      description: 'Mastering advanced techniques in Blender and professional 3D tools',
    },
    {
      title: 'Interactive Web Art',
      description: 'Building immersive web experiences with WebGL and Three.js',
    },
    {
      title: 'Virtual Reality (VR)',
      description: 'Developing immersive VR art installations and interactive experiences',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Currently Learning
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Growth mindset in action. Here's what I'm exploring right now
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {learningTopics.map((topic) => (
            <div
              key={topic.title}
              className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
              <p className="text-gray-300">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
