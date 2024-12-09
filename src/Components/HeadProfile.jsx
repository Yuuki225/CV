import { Navbar, Card, Button } from "flowbite-react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import picture from '../assets/mainpfp.jpg';
import ss from '../assets/e-inter.png';
import React from "react";


const HeadProfile = () => {
  const links = [
    { href: "#home", icon: FaHome, label: "Home" },
    { href: "#about", icon: FaUser, label: "About" },
    { href: "#projects", icon: FaProjectDiagram, label: "Projects" },
    { href: "#contact", icon: FaEnvelope, label: "Contact" },
  ];

  const projects = [
    {
      image: ss,
      title: "Website Surat Menyurat",
      description: "Project ini awalnya untuk tugas sekolah, kemudian saya modifikasi untuk kebutuhan pembelajaran. Menggunakan PHP dan MySQL.",
      link: "https://github.com/Yuuki225/surat-menyurat.git",
      status: "Completed",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur *drag-and-drop* dan kolaborasi real-time. Dibangun menggunakan React dan Firebase.",
      link: "https://github.com/your-repo",
      status: "In Progress",
    },
  ];

  const skills = ["PHP", "JavaScript", "React", "Tailwind", "Laravel", "C#", "GD Script"];

  return (
    <div>
      {/* Navbar */}
      <Navbar fluid className="sticky top-0 z-50 bg-[#dde5b6]/70 backdrop-blur-md text-white py-3 shadow-lg">
        <Navbar.Brand href="#home" className="flex items-center space-x-2">
          <img
            src={picture}
            alt="Logo"
            className="h-8 w-8 rounded-full border border-yellow-400"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
            Curriculum Vitae
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="hover:bg-gray-300 hover:text-gray-800 transition-colors duration-200 p-2" />
        <Navbar.Collapse className="font-medium text-white text-sm space-x-6 md:space-x-8">
          {links.map((link, index) => (
            <Navbar.Link
              key={index}
              href={link.href}
              className="flex items-center space-x-2 hover:text-gray-800 transition"
            >
              {React.createElement(link.icon)}
              <span>{link.label}</span>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto p-6 space-y-12">
        <section id="home">
          <Card className="p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
              <img
                alt="profile image"
                src={picture}
                className="mb-4 w-32 h-32 rounded-full shadow-lg transition-transform hover:rotate-6 hover:scale-110"
              />
              <h5 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Razwa Arqya</h5>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                yahooo welcome to my Portfolio/CV
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/Razwa_arqya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/Yuuki225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* About Me Section */}
        <section id="about">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Saya adalah seorang web developer dan game creator yang masih pemula dan masih perlu lebih banyak belajar.
            Saat ini saya menempuh pendidikan di SMK Prakarya Internasional, dan saya mengambil program studi PPLG/Pengembangan Perangkat Lunak & Gim.
            Impian saya dalam 5 tahun ke depan adalah menjadi seorang game developer yang handal dan juga bisa bekerja di perusahaan yang bagus.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Project yang pernah saya kerjakan
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="p-4 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={`Thumbnail of ${project.title}`}
                  className="rounded-lg mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <Button
                    href={project.link}
                    target="_blank"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    View Project
                  </Button>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{project.status}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {skills.map((skill, index) => (
              <li key={index} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
                <p className="text-lg font-bold text-gray-900 dark:text-white">{skill}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Jika ingin menghubungi lebih lanjut silahkan kirim email melalui email di bawah ini
            </p>
            <a
              href="mailto:kiyukrn@gmail.com"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition"
            >
              <FaEnvelope size={20} />
              <span>kiyukrn@gmail.com</span>
            </a>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HeadProfile;
