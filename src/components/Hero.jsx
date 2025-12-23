import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const subtitles = [
    'Building Scalable Solutions',
    'Data-Driven Insights',
    'Full-Stack Development',
    'AI & Machine Learning'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Profile Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 top-0 h-full w-1/2 hidden md:flex md:items-center md:justify-center pt-16 px-4"
      >
        <img 
          src="/assets/BG.png" 
          alt="Nadhir Ben Othmen" 
          className="w-auto h-full object-contain"
        />
      </motion.div>

      <div className="relative w-full md:w-1/2 px-8 sm:px-12 lg:px-20 py-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-accent text-sm md:text-base font-semibold uppercase tracking-widest mb-3 block">Hello!</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-1">
              I Am <span className="text-primary">BEN OTHMEN Nadhir</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-white mb-4"
          >
            Business Intelligence & Data Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
          Passionate about data, artificial intelligence and digital innovation </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Nadhirbenothmen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-primary transition-all duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/nadhir-ben-othmen-a58604202/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-primary transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:nadhirbenothmen12@gmail.com"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-accent transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300"
            >
              View Projects
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Cv-Ben-Othmen-Nadhir.pdf"
              download="Nadhir_Ben_Othmen_CV.pdf"
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload size={18} />
              Download CV
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
          </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-semibold mb-2">Scroll Down</span>
          <FaChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
