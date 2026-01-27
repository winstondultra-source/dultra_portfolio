export default function Gallery() {
  const images = [
    {
      title: 'Digital Portrait Series',
      description: 'Abstract digital art exploration',
    },
    {
      title: 'Animated Concepts',
      description: 'Motion graphics and animation work',
    },
    {
      title: 'VR Art Installation',
      description: 'Immersive virtual reality experience',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Visual Gallery
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          A showcase of my creative work and visual explorations
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Picture Frame */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                {/* Frame Border */}
                <div className="absolute inset-0 border-8 border-amber-900 pointer-events-none z-10 rounded-lg"></div>
                
                {/* Image Placeholder with Gradient */}
                <div className="aspect-square bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🎨</div>
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                <p className="text-gray-400 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about image uploads */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg text-center">
          <p className="text-gray-300">
            💡 <span className="italic">Ready to showcase your artwork? Replace the gradient placeholders with your actual digital art images by uploading them to the <code className="bg-gray-900 px-2 py-1 rounded">public/</code> folder and updating the image paths.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
