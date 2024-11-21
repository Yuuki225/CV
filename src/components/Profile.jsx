import { Card, Button } from "flowbite-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import picture from '../assets/mainpfp.jpg';

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto 222226 p-6 space-y-12">
      {/* Profile Section */}
      <section>
        <Card id="home" className="p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <img
              alt="profile image"
              src={picture}
              className="mb-4 w-32 h-32 rounded-full shadow-lg transition-transform hover:rotate-6 hover:scale-110"
            />
            <h5 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Razwa Arqya</h5>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              yahooo welcome to my Portfolio/cv
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/Razwa Arqya"
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
         saya adalah seorang web developer dan game creator yang masih pemula dan masih perlu lebih banyak belajar.
         saat ini saya menempuh pendidikan di SMK Prakarya Internasional, dan saya mengambil program studi PPLG/Pengembangan Perangkat Lunak & Gim.
         impian saya dalam 5 tahun ke depan adalah menjadi seorang game developer yang handal dan juga bisa bekerja di perusahaan yang bagus.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects yang pernah saya kerjakan</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">aplikasi surat menyurat sederhana</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              pada awal nya ini adalah project dari sekolah, namun project ini kurang sesuai dengan apa yang di inginkan 
              oleh client sehinga saya menjadikan project ini sebagain bahan pembelajaran.
            </p>
            <Button
              href="https://github.com/your-repo"
              target="_blank"
              className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
            >
              View Project
            </Button>
          </Card>
          <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project 2</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A task management app with drag-and-drop functionality and real-time collaboration.
            </p>
            <Button
              href="https://github.com/your-repo"
              target="_blank"
              className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
            >
              View Project
            </Button>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">PHP</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">JavaScript</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">React</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">Taillwind</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">laravel</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">C#</p>
          </li>
          <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <p className="text-lg font-bold text-gray-900 dark:text-white">GD Script</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            jika ingin menghubungi lebih lanjut silahkan kirim email melal`ui email di bawah ini
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
  );
};

export default Profile;
