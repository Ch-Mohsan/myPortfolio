import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar