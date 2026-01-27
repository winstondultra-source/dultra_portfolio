export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          Winston Dultra
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          I am a Digital Artist passionate about creating immersive, visually compelling digital art experiences that engage and inspire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-600 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
