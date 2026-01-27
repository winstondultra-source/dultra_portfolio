export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Winston Dultra</h3>
            <p>Digital Artist passionate about creating immersive visual experiences.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#learning" className="hover:text-white transition-colors">Learning</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>Digital Art</li>
              <li>Animation & Motion Graphics</li>
              <li>3D Modeling & VR</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {year} Winston Dultra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
