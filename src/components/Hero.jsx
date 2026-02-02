import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown, FaPython, FaDatabase, FaDocker, FaReact, FaAngular, FaChartBar, FaJava, FaBrain, FaChartLine, FaTable, FaChartPie, FaServer, FaChartArea, FaMicrosoft } from 'react-icons/fa'
import { SiTensorflow, SiMongodb, SiPostgresql, SiPytorch, SiTalend, SiMysql, SiOracle, SiTableau } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  // Floating icons data
  const floatingIcons = [
    { Icon: FaPython, color: '#3776AB', size: 40, delay: 0, duration: 20, x: '10%', y: '15%' },
    { Icon: SiTensorflow, color: '#FF6F00', size: 35, delay: 2, duration: 25, x: '85%', y: '20%' },
    { Icon: FaReact, color: '#61DAFB', size: 38, delay: 1, duration: 22, x: '15%', y: '70%' },
    { Icon: SiMongodb, color: '#47A248', size: 36, delay: 3, duration: 24, x: '90%', y: '60%' },
    { Icon: FaDatabase, color: '#4169E1', size: 34, delay: 4, duration: 23, x: '8%', y: '45%' },
    { Icon: FaChartLine, color: '#F2C811', size: 40, delay: 1.5, duration: 21, x: '92%', y: '85%' },
    { Icon: FaDocker, color: '#2496ED', size: 37, delay: 2.5, duration: 26, x: '12%', y: '88%' },
    { Icon: FaAngular, color: '#DD0031', size: 35, delay: 3.5, duration: 24, x: '88%', y: '40%' },
    { Icon: FaBrain, color: '#FF6B9D', size: 36, delay: 0.5, duration: 22, x: '5%', y: '30%' },
    { Icon: SiPytorch, color: '#EE4C2C', size: 34, delay: 4.5, duration: 25, x: '95%', y: '75%' },
    { Icon: FaChartBar, color: '#27AE60', size: 33, delay: 1.8, duration: 23, x: '7%', y: '60%' },
    { Icon: SiTalend, color: '#16B4E5', size: 35, delay: 3.2, duration: 24, x: '93%', y: '30%' },
    { Icon: SiPostgresql, color: '#4169E1', size: 38, delay: 2.8, duration: 22, x: '18%', y: '25%' },
    { Icon: SiMysql, color: '#4479A1', size: 36, delay: 1.2, duration: 24, x: '82%', y: '55%' },
    { Icon: FaTable, color: '#34A853', size: 34, delay: 3.8, duration: 23, x: '14%', y: '50%' },
    { Icon: FaChartPie, color: '#EA4335', size: 35, delay: 0.8, duration: 21, x: '88%', y: '70%' },
    { Icon: FaMicrosoft, color: '#CC2927', size: 37, delay: 4.2, duration: 25, x: '6%', y: '75%' },
    { Icon: FaServer, color: '#0078D4', size: 33, delay: 2.2, duration: 22, x: '94%', y: '50%' },
    { Icon: FaChartArea, color: '#FBBC04', size: 35, delay: 1.6, duration: 24, x: '10%', y: '82%' },
    { Icon: SiTableau, color: '#E97627', size: 36, delay: 3.6, duration: 23, x: '90%', y: '15%' },
  ]
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

      {/* Floating Skills Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-60 hover:opacity-90 transition-opacity duration-300"
            style={{
              left: item.x,
              top: item.y,
              color: item.color,
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 30px currentColor)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}
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
            <span className="text-accent text-sm md:text-base font-semibold uppercase tracking-widest mb-3 block">{t('hero.greeting')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-1 whitespace-nowrap">
              {t('hero.iAm')} <span className="text-primary">{t('hero.name')}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-white mb-4"
          >
            {t('hero.title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

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
              {t('hero.viewProjects')}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="Nadhir-BENOTHMEN-CV.pdf"
              download="Nadhir_Ben_Othmen_CV.pdf"
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload size={18} />
              {t('hero.downloadCV')}
            </motion.a>
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
          <span className="text-sm font-semibold mb-2">{t('hero.scrollDown')}</span>
          <FaChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
