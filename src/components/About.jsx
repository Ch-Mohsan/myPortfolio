const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#7F00FF] shadow-lg shadow-[#7F00FF]/20">
                <img
                  src="/profile.png"
                  alt="Mohsan Ali Zafar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-[#00E0FF] drop-shadow-lg">Mohsan Ali Zafar</h3>
            <p className="text-white text-lg font-semibold mb-2 drop-shadow">Full Stack Developer | React Enthusiast</p>
            <p className="text-[#EDEDED] text-lg">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in web development has equipped me with a strong foundation in both frontend and
              backend technologies.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white drop-shadow">Skills & Expertise</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">React.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">Bootstrap</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">Node.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">MongoDB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E0FF]"></span>
                  <span className="text-white">Modern CSS</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Ch-Mohsan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDEDED] hover:text-[#00E0FF] transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <a
              href="/src/assets/Mycv.pdf"
              download
              className="mt-6 inline-block px-8 py-3 bg-[#7F00FF] text-white rounded-lg font-semibold shadow hover:bg-[#00E0FF] transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
