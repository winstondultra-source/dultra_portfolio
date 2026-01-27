'use client';

export default function About() {
  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-purple-600 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-white text-lg font-semibold">Winston Dultra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate digital artist dedicated to creating immersive, visually compelling experiences that captivate and inspire audiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in digital illustration, animation, and emerging technologies like VR and AR, I blend traditional art principles with cutting-edge digital tools to push creative boundaries.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My journey showcases growth across multiple disciplines—from mastering fundamental digital art techniques to exploring the possibilities of immersive technologies and interactive experiences.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <p className="text-sm text-gray-400">Major Projects</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <p className="text-sm text-gray-400">Tools & Software</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <p className="text-sm text-gray-400">Growing Knowledge</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
