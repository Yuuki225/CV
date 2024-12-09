import { Navbar } from "flowbite-react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import picture from '../assets/take_your_heart.jpg';

const Navbar = () => {
  return (
    <Navbar fluid className="sticky top-0 z-50 bg-[#dde5b6]/70 backdrop-blur-md text-white py-3 shadow-lg">
      {/* Logo */}
      <Navbar.Brand href="#home" className="flex items-center space-x-2">
        <img
          src={picture}
          alt="Logo"
          className="h-8 w-8 rounded-full border border-yellow-400"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
          Curiculum Vitae
        </span>
      </Navbar.Brand>

      {/* Toggle Button for Mobile */}
      <Navbar.Toggle className="hover:bg-gray-300 hover:text-gray-800 transition-colors duration-200 p-2" />

      {/* Navbar Links */}
      <Navbar.Collapse className="font-medium text-white text-sm space-x-6 md:space-x-8">
        <Navbar.Link
          href="#home"
          className="flex items-center space-x-2 hover:text-gray-800 transition"
        >
          <FaHome />
          <span>Home</span>
        </Navbar.Link>
        <Navbar.Link
          href="#about"
          className="flex items-center space-x-2 hover:text-gray-800 transition"
        >
          <FaUser />
          <span>About</span>
        </Navbar.Link>
        <Navbar.Link
          href="#projects"
          className="flex items-center space-x-2 hover:text-gray-800 transition"
        >
          <FaProjectDiagram />
          <span>Projects</span>
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className="flex items-center space-x-2 hover:text-gray-800 transition"
        >
          <FaEnvelope />
          <span>Contact</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar;
